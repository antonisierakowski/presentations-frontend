import { takeEvery, call } from 'redux-saga/effects';
import { INIT_ACTION } from './constants';
import { FeedClient } from '../../services/FeedClient';

export function* initSaga() {
  yield takeEvery(INIT_ACTION, onInitAction);
}

export function* onInitAction() {}
