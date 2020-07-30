import { takeLatest, select, call, take, put } from 'redux-saga/effects';
import { GET_FEED_CONNECTION } from './constants';
import { selectCurrentPresentationId } from '../presentation/selectors';
import { WS_DOMAIN } from '../../constants';
import { eventChannel } from 'redux-saga';
import { setCurrentSlideSuccess } from '../presentation/actions';
import { mapPresentationDbRowToDomainEntity } from '../presentation/utils';

export function* feedSaga() {
  yield takeLatest(GET_FEED_CONNECTION, onGetFeedConnection);
}

export function* onGetFeedConnection() {
  const currentPresentationId = yield select(selectCurrentPresentationId);
  const socket = new WebSocket(`${WS_DOMAIN}/${currentPresentationId}`);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    const payload = yield take(socketChannel);
    const presentation = mapPresentationDbRowToDomainEntity(payload);
    yield put(setCurrentSlideSuccess({ presentation }));
  }
}

function createSocketChannel(socket: WebSocket) {
  return eventChannel(emit => {
    socket.onmessage = (message: MessageEvent) => {
      const { data } = message;
      const parsedData = JSON.parse(data);
      emit(parsedData);
    };

    const unsubscribe = () => {
      socket.close();
    };

    return unsubscribe;
  });
}
