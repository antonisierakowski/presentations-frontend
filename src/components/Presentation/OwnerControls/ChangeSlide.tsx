import React from 'react';
import { SkipPrevious, SkipNext } from '@material-ui/icons';
import { usePresentationControls } from './hook';

export enum ChangeSlideDirection {
  PREV,
  NEXT,
}

interface Props {
  direction: ChangeSlideDirection;
}

export const ChangeSlide: React.FC<Props> = ({
  direction,
}: Props): React.ReactElement => {
  const {
    canDecrement,
    canIncrement,
    onDecrementSlide,
    onIncrementSlide,
  } = usePresentationControls();

  if (direction === ChangeSlideDirection.PREV && canDecrement) {
    return <SkipPrevious onClick={onDecrementSlide} />;
  }

  if (direction === ChangeSlideDirection.NEXT && canIncrement) {
    return <SkipNext onClick={onIncrementSlide} />;
  }

  return null;
};
