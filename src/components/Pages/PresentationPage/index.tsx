import React from 'react';
import styles from './styles.module.css';
import { PdfPresentation } from '../../Presentation/PdfPresentation';
import {
  ChangeSlide,
  ChangeSlideDirection,
} from '../../Presentation/OwnerControls/ChangeSlide';
import { RemovePresentation } from '../../Presentation/OwnerControls/RemovePresentation';

export const PresentationPage: React.FC = (): React.ReactElement => {
  return (
    <div className={styles.presentationPage}>
      <div className={styles.presentationSection}>
        <ChangeSlide direction={ChangeSlideDirection.PREV} />
        <PdfPresentation />
        <ChangeSlide direction={ChangeSlideDirection.NEXT} />
      </div>
      <div className={styles.footer}>
        <RemovePresentation />
      </div>
    </div>
  );
};
