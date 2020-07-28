import { takeEvery } from 'redux-saga/effects';
import { INIT_ACTION } from './constants';

export function* initSaga() {
  yield takeEvery(INIT_ACTION, onInitAction);
}

export function* onInitAction() {
  // do stuff on app init
}
