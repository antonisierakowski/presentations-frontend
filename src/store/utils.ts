import { Action } from './types';
import { createFailureNotification } from './notifications/sagas';
import * as notificationMessages from '../constants/notificationMessages';
import * as exceptions from '../services/HttpClient/exceptions';
import { call } from 'redux-saga/effects';

export function createAction<TPayload>(
  actionType: string,
  payload?: TPayload,
): Action<TPayload> {
  return {
    type: actionType,
    payload,
  };
}

export function* handleRequestError(error: Error) {
  // todo handle all errors
  switch (error.constructor) {
    case exceptions.BadRequestError:
    case exceptions.ApiValidationError: {
      yield call(
        createFailureNotification,
        notificationMessages.submitFailureMsg,
      );
      break;
    }
    case exceptions.NoApiResponseError: {
      yield call(
        createFailureNotification,
        notificationMessages.noConnectionMsg,
      );
      break;
    }
    case exceptions.ResourceNotFoundError: {
      yield call(
        createFailureNotification,
        notificationMessages.resourceNotFoundError,
      );
      break;
    }
    case exceptions.ForbiddenError: {
      yield call(createFailureNotification, notificationMessages.forbiddenMsg);
      break;
    }
    case exceptions.UnsupportedMediaTypeError: {
      yield call(
        createFailureNotification,
        notificationMessages.unsupportedMediaMsg,
      );
      break;
    }
    case exceptions.ApiInternalError:
    default: {
      yield call(
        createFailureNotification,
        notificationMessages.internalErrorMsg,
      );
    }
  }
}
