import { Action } from '../types';
import { Reducer } from 'react';
import { SET_IS_USER_PRESENTATION_OWNER } from './constants';

export interface UserState {
  isUserPresentationOwner: boolean;
}

const initialState: UserState = {
  isUserPresentationOwner: null,
};

export const userReducer: Reducer<UserState, Action> = (
  state: UserState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case SET_IS_USER_PRESENTATION_OWNER: {
      return {
        ...state,
        isUserPresentationOwner: action.payload.isUserPresentationOwner,
      };
    }
    default: {
      return state;
    }
  }
};
