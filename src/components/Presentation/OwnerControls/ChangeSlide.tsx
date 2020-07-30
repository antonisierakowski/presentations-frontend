import React from 'react';
import { SkipPrevious, SkipNext } from '@material-ui/icons';
import { usePresentationControls } from './hook';
import { Button } from '@material-ui/core';

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

  if (direction === ChangeSlideDirection.PREV) {
    return (
      <Button
        variant="contained"
        onClick={onDecrementSlide}
        disabled={!canDecrement}
      >
        <SkipPrevious onClick={onDecrementSlide} />
      </Button>
    );
  }

  if (direction === ChangeSlideDirection.NEXT) {
    return (
      <Button
        variant="contained"
        onClick={onIncrementSlide}
        disabled={!canIncrement}
      >
        <SkipNext onClick={onIncrementSlide} />
      </Button>
    );
  }

  return null;
};
