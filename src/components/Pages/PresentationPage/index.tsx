import React from 'react';
import { RootState } from '../../../store/types';
import { selectIsCurrentPresentationLoading } from '../../../store/presentation/selectors';
import { useSelector } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import './styles.css';

export const PresentationPage: React.FC = () => {
  const isPresentationLoading = useSelector((state: RootState) =>
    selectIsCurrentPresentationLoading(state),
  );

  if (isPresentationLoading) {
    return <LinearProgress color="secondary" className="linearProgress" />;
  }

  return <div className="presentationPage">Presentation</div>;
};
