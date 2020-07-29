import React from 'react';
import { useFileUpload } from './hook';

export const PresentationInput: React.FC = () => {
  const { onUpload } = useFileUpload();

  return <input onChange={onUpload} type={'file'} />;
};
