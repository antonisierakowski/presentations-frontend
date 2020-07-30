import React from 'react';
import { usePresentationControls } from '../hook';
import { Button } from '@material-ui/core';

export const RemovePresentationButton: React.FC = (): React.ReactElement => {
  const { onRemovePresentation } = usePresentationControls();

  return (
    <Button variant="contained" onClick={onRemovePresentation}>
      End presentation
    </Button>
  );
};
