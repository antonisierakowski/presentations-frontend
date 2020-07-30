import React from 'react';
import { PresentationInput } from '../../PresentationInput';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import {
  selectIsFileUploading,
  selectUploadingFileName,
} from '../../../store/app/selectors';
import { RootState } from '../../../store/types';
import { Paper, Typography } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

export const IndexPage: React.FC = () => {
  const isUploading = useSelector((state: RootState) =>
    selectIsFileUploading(state),
  );
  const uploadingFileName = useSelector((state: RootState) =>
    selectUploadingFileName(state),
  );

  return (
    <div className={styles.presentationInputPage}>
      <Paper className={styles.mainWrapper} elevation={5}>
        <div className={styles.heading}>
          <Typography variant="subtitle2">
            Present it. Recruitment task for Lama Media.
          </Typography>
          <Typography variant="body2">
            To start, upload a .pdf or .pptx file. Once your file is uploaded,
            you can share the generated link with your viewers. Only you will be
            able to change currently viewed slide or end the presentation.
          </Typography>
        </div>
        <PresentationInput />
        {isUploading && (
          <div className={styles.uploading}>
            <CircularProgress className={styles.spinner} size={20} />
            <Typography variant="subtitle2">
              Uploading {uploadingFileName}...
            </Typography>
          </div>
        )}
      </Paper>
    </div>
  );
};
