import { takeLatest, call, put, select } from 'redux-saga/effects';
import * as constants from './constants';
import * as requests from '../../services/HttpClient/requests';
import {
  GetPresentationPayload,
  getPresentationSuccess,
  RemovePresentationPayload,
  removePresentationSuccess,
  setCurrentSlideSuccess,
  UploadPresentationPayload,
  uploadPresentationSuccess,
} from './actions';
import { Action } from '../types';
import { handleRequestError } from '../utils';
import { mapPresentationDbRowToDomainEntity } from './utils';
import {
  selectCurrentPresentationId,
  selectCurrentSlideNumber,
} from './selectors';
import { DECREMENT_CURRENT_SLIDE, INCREMENT_CURRENT_SLIDE } from './constants';
import { setIsUserPresentationOwner } from '../user/actions';
import { push } from 'connected-react-router';
import { getFeedConnection } from '../feed/actions';

export function* presentationSaga() {
  yield takeLatest(constants.UPLOAD_PRESENTATION, onUploadPresentation);
  yield takeLatest(constants.GET_PRESENTATION, onGetPresentation);
  yield takeLatest(
    constants.INCREMENT_CURRENT_SLIDE,
    onIncrementOrDecrementCurrentSlide,
  );
  yield takeLatest(
    constants.DECREMENT_CURRENT_SLIDE,
    onIncrementOrDecrementCurrentSlide,
  );
  yield takeLatest(constants.REMOVE_PRESENTATION, onRemovePresentation);
}

export function* onUploadPresentation({
  payload,
}: Action<UploadPresentationPayload>) {
  const { file, fileName } = payload;
  const blob = new Blob([file]);
  try {
    const { response } = yield call(requests.postPresentation, blob, fileName);
    const presentation = mapPresentationDbRowToDomainEntity(
      response.presentation,
    );
    yield put(uploadPresentationSuccess({ presentation }));
    yield put(setIsUserPresentationOwner({ isUserPresentationOwner: true }));
    yield put(push(`/${presentation.id}`));
    yield put(getFeedConnection());
  } catch (e) {
    yield handleRequestError(e);
  }
}

export function* onGetPresentation({
  payload,
}: Action<GetPresentationPayload>) {
  const { presentationId } = payload;
  try {
    const { response } = yield call(requests.getPresentation, presentationId);
    const presentation = mapPresentationDbRowToDomainEntity(
      response.presentation,
    );
    yield put(
      getPresentationSuccess({ presentation, metadata: response.metadata }),
    );
    yield put(
      setIsUserPresentationOwner({
        isUserPresentationOwner: response.metadata.isOwner,
      }),
    );
    yield put(getFeedConnection());
  } catch (e) {
    yield put(push('/'));
    yield handleRequestError(e);
  }
}

export function* onIncrementOrDecrementCurrentSlide(action: Action) {
  const currentId = yield select(selectCurrentPresentationId);
  const currentSlide = yield select(selectCurrentSlideNumber);
  let newSlide: number;

  switch (action.type) {
    case INCREMENT_CURRENT_SLIDE: {
      newSlide = currentSlide + 1;
      break;
    }
    case DECREMENT_CURRENT_SLIDE: {
      newSlide = currentSlide - 1;
      break;
    }
    default: {
      newSlide = currentSlide;
    }
  }

  try {
    const { response } = yield call(
      requests.setPresentationCurrentSlide,
      currentId,
      {
        currentSlide: newSlide,
      },
    );
    const presentation = mapPresentationDbRowToDomainEntity(
      response.presentation,
    );
    yield put(setCurrentSlideSuccess({ presentation }));
  } catch (e) {
    yield handleRequestError(e);
  }
}

export function* onRemovePresentation({
  payload,
}: Action<RemovePresentationPayload>) {
  const { presentationId } = payload;
  try {
    yield call(requests.deletePresentation, presentationId);
    yield put(removePresentationSuccess());
    yield put(push('/'));
  } catch (e) {
    yield handleRequestError(e);
  }
}
