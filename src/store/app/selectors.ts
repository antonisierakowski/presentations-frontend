import { RootState } from '../types';
import { AppState } from './reducer';

export const selectCurrentPath = (state: RootState): string =>
  state.router.location.pathname;

export const selectPresentationIdFromPath = (state: RootState): string => {
  const currentPath = selectCurrentPath(state);
  return currentPath.substr(1);
};

export const selectAppDomain = (state: RootState): AppState => state.appState;

export const selectIsFileUploading = (state: RootState): boolean =>
  selectAppDomain(state).isFileUploading;

export const selectUploadingFileName = (state: RootState): string =>
  selectAppDomain(state).fileName;
