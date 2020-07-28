import { Presentation } from './model';

export interface PresentationState {
  currentPresentation: Presentation;
}

const initialState: PresentationState = {
  currentPresentation: null,
};
