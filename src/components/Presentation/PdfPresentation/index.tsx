import React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { usePresentation } from '../hook';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types';
import { selectCurrentPresentationUrl } from '../../../store/presentation/selectors';

export const PdfPresentation: React.FC = (): React.ReactElement => {
  const presentationUrl = useSelector((state: RootState) =>
    selectCurrentPresentationUrl(state),
  );
  return (
    <Document file={presentationUrl} className={styles.presentationWrapper}>
      <PdfPage />
    </Document>
  );
};

const PdfPage: React.FC = (): React.ReactElement => {
  const { currentSlide } = usePresentation();

  return <Page pageNumber={currentSlide} renderAnnotationLayer={false} />;
};
