import React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { usePresentation } from '../hook';

export const PdfPresentation: React.FC = (): React.ReactElement => {
  const { currentSlide, presentationUrl } = usePresentation();

  return (
    <Document file={presentationUrl}>
      <Page pageNumber={currentSlide} />
    </Document>
  );
};
