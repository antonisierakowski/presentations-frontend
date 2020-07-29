import { takeLatest, select, put } from 'redux-saga/effects';
import { INIT_ACTION } from './constants';
import { selectCurrentPath } from './selectors';
import { getPresentation } from '../presentation/actions';

export function* initSaga() {
  yield takeLatest(INIT_ACTION, onInitAction);
}

export function* onInitAction() {
  const currentPath = yield select(selectCurrentPath);

  if (currentPath === '/') {
    return;
  }

  const presentationId = currentPath.replace('/', '');

  yield put(getPresentation({ presentationId }));
}
