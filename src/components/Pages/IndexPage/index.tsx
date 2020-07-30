import React from 'react';
import { PresentationInput } from '../../PresentationInput';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import {
  selectIsFileUploading,
  selectUploadingFileName,
} from '../../../store/app/selectors';
import { RootState } from '../../../store/types';
import { Typography } from '@material-ui/core';
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
      <PresentationInput />
      {isUploading && (
        <div className={styles.uploading}>
          <CircularProgress className={styles.spinner} size={20} />
          <Typography variant="subtitle2">
            Uploading {uploadingFileName}...
          </Typography>
        </div>
      )}
    </div>
  );
};
