import { takeEvery, call, select, put } from 'redux-saga/effects';
import { INIT_ACTION } from './constants';
import { FeedClient } from '../../services/FeedClient';
import { selectCurrentPath } from './selectors';
import { getPresentation } from '../presentation/actions';

export function* initSaga() {
  yield takeEvery(INIT_ACTION, onInitAction);
}

export function* onInitAction() {
  const currentPath = yield select(selectCurrentPath);

  if (currentPath === '/' || currentPath === '/404') {
    return;
  }

  const presentationId = currentPath.replace('/', '');

  yield put(getPresentation({ presentationId }));
  // todo connect feed once it's ready
}
