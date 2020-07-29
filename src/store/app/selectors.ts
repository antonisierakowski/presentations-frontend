import { RootState } from '../types';
import { AppState } from './reducer';

export const selectCurrentPath = (state: RootState): string =>
  state.router.location.pathname;

export const selectAppDomain = (state: RootState): AppState => state.appState;

export const selectIsFileUploading = (state: RootState): boolean =>
  selectAppDomain(state).isFileUploading;

export const selectUploadingFileName = (state: RootState): string =>
  selectAppDomain(state).fileName;
