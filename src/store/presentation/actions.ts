import { createAction } from '../utils';
import { Action } from '../types';
import {
  DECREMENT_CURRENT_SLIDE,
  GET_PRESENTATION,
  GET_PRESENTATION_SUCCESS,
  INCREMENT_CURRENT_SLIDE,
  REMOVE_PRESENTATION,
  REMOVE_PRESENTATION_SUCCESS,
  SET_CURRENT_SLIDE_SUCCESS,
  UPLOAD_PRESENTATION,
  UPLOAD_PRESENTATION_SUCCESS,
} from './constants';
import { Presentation, PresentationMetadata } from './model';

export interface UploadPresentationPayload {
  file: ArrayBuffer;
  fileName: string;
}

export const uploadPresentation = (
  payload: UploadPresentationPayload,
): Action<UploadPresentationPayload> =>
  createAction(UPLOAD_PRESENTATION, payload);

export interface UploadPresentationSuccessPayload {
  presentation: Presentation;
}

export const uploadPresentationSuccess = (
  payload: UploadPresentationSuccessPayload,
): Action<UploadPresentationSuccessPayload> =>
  createAction(UPLOAD_PRESENTATION_SUCCESS, payload);

export interface GetPresentationPayload {
  presentationId: string;
}

export const getPresentation = (
  payload: GetPresentationPayload,
): Action<GetPresentationPayload> => createAction(GET_PRESENTATION, payload);

export interface GetPresentationSuccessPayload {
  presentation: Presentation;
  metadata: PresentationMetadata;
}

export const getPresentationSuccess = (
  payload: GetPresentationSuccessPayload,
): Action<GetPresentationSuccessPayload> =>
  createAction(GET_PRESENTATION_SUCCESS, payload);

export const incrementCurrentSlide = () =>
  createAction(INCREMENT_CURRENT_SLIDE);

export const decrementCurrentSlide = () =>
  createAction(DECREMENT_CURRENT_SLIDE);

export interface SetCurrentSlideSuccess {
  presentation: Presentation;
}

export const setCurrentSlideSuccess = (
  payload: SetCurrentSlideSuccess,
): Action<SetCurrentSlideSuccess> =>
  createAction(SET_CURRENT_SLIDE_SUCCESS, payload);

export const removePresentation = (): Action =>
  createAction(REMOVE_PRESENTATION);

export const removePresentationSuccess = (): Action =>
  createAction(REMOVE_PRESENTATION_SUCCESS);
