import { RootState } from '../types';

export const selectCurrentPath = (state: RootState): string =>
  state.router.location.pathname;
