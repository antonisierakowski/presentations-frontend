import React from 'react';
import { useFileUpload } from './hook';
import { Button } from '@material-ui/core';

export const PresentationInput: React.FC = () => {
  const { onUpload } = useFileUpload();

  return (
    <div>
      <Button variant="contained" component="label">
        Upload File
        <input type="file" onChange={onUpload} style={{ display: 'none' }} />
      </Button>
    </div>
  );
};
