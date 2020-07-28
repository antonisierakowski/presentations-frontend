import { takeEvery, call } from 'redux-saga/effects';
import { UPLOAD_PRESENTATION } from './constants';
import { postPresentation } from '../../services/HttpClient/requests';

export function* presentationSaga() {
  yield takeEvery(UPLOAD_PRESENTATION, onUploadPresentation);
}

export function* onUploadPresentation(action: any) {
  // todo type
  // yield call(postPresentation, action.payload.file)
}
