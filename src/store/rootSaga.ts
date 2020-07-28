import { all } from 'redux-saga/effects';
import { notificationSaga } from './notifications/sagas';
import { initSaga } from './app/sagas';
import { presentationSaga } from './presentation/sagas';
import { feedSaga } from './feed/sagas';

export default function* rootSaga() {
  yield all([notificationSaga(), initSaga(), presentationSaga(), feedSaga()]);
}
