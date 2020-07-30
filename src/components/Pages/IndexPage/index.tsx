import React from 'react';
import { PresentationInput } from '../../PresentationInput';
import styles from './styles.module.css';
import { Paper, Typography } from '@material-ui/core';
import { UploadingIndicator } from '../../UploadingIndicator';

export const IndexPage: React.FC = () => (
  <div className={styles.presentationInputPage}>
    <Paper className={styles.mainWrapper} elevation={5}>
      <div className={styles.heading}>
        <Typography variant="subtitle2">
          Present it. Recruitment task for Lama Media.
        </Typography>
        <Typography variant="body2">
          To start, upload a .pdf or .pptx file. Once your file is uploaded, you
          can share the generated link with your viewers. Only you will be able
          to change currently viewed slide or end the presentation.
        </Typography>
      </div>
      <PresentationInput />
      <UploadingIndicator />
    </Paper>
  </div>
);
