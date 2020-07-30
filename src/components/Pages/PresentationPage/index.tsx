import React from 'react';
import styles from './styles.module.css';
import { PdfPresentation } from '../../Presentation/PdfPresentation';
import {
  ChangeSlide,
  ChangeSlideDirection,
} from '../../Presentation/OwnerControls/ChangeSlide';
import { RemovePresentation } from '../../Presentation/OwnerControls/RemovePresentation';
import { Paper } from '@material-ui/core';

export const PresentationPage: React.FC = (): React.ReactElement => {
  return (
    <div className={styles.presentationPage}>
      <div className={styles.presentationSection}>
        <PdfPresentation />
      </div>
      <Paper className={styles.controls} elevation={3}>
        <ChangeSlide direction={ChangeSlideDirection.PREV} />
        <RemovePresentation />
        <ChangeSlide direction={ChangeSlideDirection.NEXT} />
      </Paper>
    </div>
  );
};
