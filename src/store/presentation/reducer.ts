import { Presentation } from './model';
import { Reducer } from 'react';
import { Action } from '../types';
import * as constants from './constants';

export interface PresentationState {
  currentPresentation: Presentation;
}

const initialState: PresentationState = {
  currentPresentation: null,
};

export const presentationReducer: Reducer<PresentationState, Action> = (
  state: PresentationState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case constants.UPLOAD_PRESENTATION_SUCCESS:
    case constants.GET_PRESENTATION_SUCCESS:
    case constants.SET_CURRENT_SLIDE_SUCCESS: {
      return {
        ...state,
        currentPresentation: action.payload.presentation,
      };
    }
    case constants.REMOVE_PRESENTATION_SUCCESS: {
      return {
        ...state,
        currentPresentation: null,
      };
    }
    default: {
      return state;
    }
  }
};
