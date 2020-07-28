import { createAction } from '../utils';
import { SET_IS_USER_PRESENTATION_OWNER } from './constants';

interface SetIsUserPresentationOwnerPayload {
  isUserPresentationOwner: boolean;
}

export const setIsUserPresentationOwner = (
  payload: SetIsUserPresentationOwnerPayload,
) =>
  createAction<SetIsUserPresentationOwnerPayload>(
    SET_IS_USER_PRESENTATION_OWNER,
    payload,
  );
