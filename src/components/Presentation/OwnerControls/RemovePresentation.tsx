import React from 'react';
import { usePresentationControls } from './hook';
import { Button } from '@material-ui/core';

export const RemovePresentation: React.FC = (): React.ReactElement => {
  const {
    canRemovePresentation,
    onRemovePresentation,
  } = usePresentationControls();

  if (canRemovePresentation) {
    return <Button onClick={onRemovePresentation}>End presentation</Button>;
  }

  return null;
};
