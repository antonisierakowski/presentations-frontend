import { Presentation } from './model';
import { Reducer } from 'react';
import { Action } from '../types';

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
    default: {
      return state;
    }
  }
};
