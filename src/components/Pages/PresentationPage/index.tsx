import React from 'react';
import styles from './styles.module.css';
import { PdfPresentation } from '../../Presentation/PdfPresentation';
import { OwnerControls } from '../../Presentation/OwnerControls';
import { SlideCount } from '../../Presentation/SlideCount';

export const PresentationPage: React.FC = (): React.ReactElement => {
  return (
    <div className={styles.presentationPage}>
      <div className={styles.presentationSection}>
        <PdfPresentation />
      </div>
      <OwnerControls />
      <SlideCount />
    </div>
  );
};
