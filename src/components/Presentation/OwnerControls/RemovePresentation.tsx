import React from 'react';
import { usePresentationControls } from './hook';
import { Button } from '@material-ui/core';

export const RemovePresentation: React.FC = (): React.ReactElement => {
  const {
    canRemovePresentation,
    onRemovePresentation,
  } = usePresentationControls();

  if (canRemovePresentation) {
    return (
      <Button variant="contained" onClick={onRemovePresentation}>
        End presentation
      </Button>
    );
  }

  return null;
};
