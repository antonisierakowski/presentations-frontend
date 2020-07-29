import { Reducer } from 'react';
import { Action } from '../types';
import * as constants from '../presentation/constants';

export interface AppState {
  isFileUploading: boolean;
  fileName: string;
}

const initialState: AppState = {
  isFileUploading: false,
  fileName: null,
};

export const appReducer: Reducer<AppState, Action> = (
  state: AppState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case constants.UPLOAD_PRESENTATION: {
      return {
        ...state,
        isFileUploading: true,
        fileName: action.payload.fileName,
      };
    }
    case constants.UPLOAD_PRESENTATION_SUCCESS: {
      return {
        ...state,
        isFileUploading: false,
        fileName: null,
      };
    }
    case constants.UPLOAD_PRESENTATION_FAILURE: {
      return {
        ...state,
        isFileUploading: false,
        fileName: null,
      };
    }
    default: {
      return state;
    }
  }
};
