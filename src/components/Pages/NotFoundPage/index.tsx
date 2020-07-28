import React from 'react';
import { Typography } from '@material-ui/core';
import { CancelPresentation } from '@material-ui/icons';
import './styles.css';

export const NotFoundPage: React.FC = () => (
  <div className="notFoundPage">
    <CancelPresentation fontSize="large" />
    <Typography variant="subtitle2">
      Nothing is here. Are you sure you copied the right link?
    </Typography>
  </div>
);
