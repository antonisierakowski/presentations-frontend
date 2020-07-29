import React from 'react';
import './styles.css';
import { PdfPresentation } from '../../Presentation/PdfPresentation';

export const PresentationPage: React.FC = (): React.ReactElement => {
  return (
    <div className="presentationPage">
      <PdfPresentation />
      {/*todo add controls here*/}
    </div>
  );
};
