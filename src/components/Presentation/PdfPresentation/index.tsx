import React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { usePresentation } from '../hook';
import styles from './styles.module.css';

export const PdfPresentation: React.FC = (): React.ReactElement => {
  const { currentSlide, presentationUrl } = usePresentation();

  return (
    <Document file={presentationUrl} className={styles.presentationWrapper}>
      <Page pageNumber={currentSlide} />
    </Document>
  );
};
