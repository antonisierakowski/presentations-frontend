import { RootState } from '../types';

// @ts-ignore
export const selectCurrentPath = (state: RootState): string =>
  state.router.location.pathname; // todo type the router state
