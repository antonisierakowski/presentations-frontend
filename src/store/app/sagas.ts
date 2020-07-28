import { takeEvery } from 'redux-saga/effects';

export function* notificationSaga() {
  yield takeEvery(INIT_ACTION, onInitAction);
}

export function* onInitAction() {
  // do stuff on app init
}
