import { RootState } from '../types';

export const isUserCurrentPresentationOwner = (state: RootState) =>
  state.userState.isUserPresentationOwner;
