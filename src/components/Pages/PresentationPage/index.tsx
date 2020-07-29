import React from 'react';
import './styles.css';
import { PdfPresentation } from '../../Presentation/PdfPresentation';
import {
  ChangeSlide,
  ChangeSlideDirection,
} from '../../Presentation/OwnerControls/ChangeSlide';
import { RemovePresentation } from '../../Presentation/OwnerControls/RemovePresentation';

export const PresentationPage: React.FC = (): React.ReactElement => {
  return (
    <div className="presentationPage">
      <div className="presentationSection">
        <ChangeSlide direction={ChangeSlideDirection.PREV} />
        <PdfPresentation />
        <ChangeSlide direction={ChangeSlideDirection.NEXT} />
      </div>
      <div className="footer">
        <RemovePresentation />
      </div>
    </div>
  );
};
