import { Paper } from '@material-ui/core';
import styles from './styles.module.css';
import {
  ChangeSlideButton,
  ChangeSlideDirection,
} from './ChangeSlideButton/ChangeSlideButton';
import { RemovePresentationButton } from './RemovePresentationButton/RemovePresentationButton';
import React from 'react';
import { usePresentationControls } from './hook';

export const OwnerControls: React.FC = (): React.ReactElement => {
  const { isPresentationOwner } = usePresentationControls();

  if (isPresentationOwner) {
    return (
      <Paper className={styles.controls} elevation={3}>
        <ChangeSlideButton direction={ChangeSlideDirection.PREV} />
        <RemovePresentationButton />
        <ChangeSlideButton direction={ChangeSlideDirection.NEXT} />
      </Paper>
    );
  }

  return null;
};
