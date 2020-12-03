import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import {
  selectIsFileUploading,
  selectUploadingFileName,
} from '../../store/app/selectors';
import styles from './styles.module.css';
import { CircularProgress, Typography } from '@material-ui/core';

export const UploadingIndicator: React.FC = () => {
  const isUploading = useSelector((state: RootState) =>
    selectIsFileUploading(state),
  );
  const uploadingFileName = useSelector((state: RootState) =>
    selectUploadingFileName(state),
  );

  if (isUploading) {
    return (
      <div className={styles.uploading}>
        <CircularProgress className={styles.spinner} size={20} />
        <Typography variant="subtitle2">
          Uploading {uploadingFileName}...
        </Typography>
      </div>
    );
  }

  return null;
};
