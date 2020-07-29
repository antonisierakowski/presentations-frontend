import React from 'react';
import { RootState } from '../../../store/types';
import {
  selectCurrentPresentation,
  selectIsCurrentPresentationLoading,
} from '../../../store/presentation/selectors';
import { useSelector } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import './styles.css';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

export const PresentationPage: React.FC = () => {
  const isPresentationLoading = useSelector((state: RootState) =>
    selectIsCurrentPresentationLoading(state),
  );
  const currentPresentation = useSelector((state: RootState) =>
    selectCurrentPresentation(state),
  );

  if (isPresentationLoading) {
    return <LinearProgress color="secondary" className="linearProgress" />;
  }
  console.log(currentPresentation);
  return (
    <div className="presentationPage">
      <Document file={currentPresentation.fileUrl}>
        <Page pageNumber={currentPresentation.currentSlide} />
      </Document>
    </div>
  );
};
