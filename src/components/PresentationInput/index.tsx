import React from 'react';
import { useDispatch } from 'react-redux';
import { UPLOAD_PRESENTATION } from '../../store/presentation/constants';

export const PresentationInput: React.FC = () => {
  const dispatch = useDispatch();
  const onUpload = (event: any) => {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(selectedFile);
    fileReader.onload = function (fileLoadedEvent: any) {
      const file = fileLoadedEvent.target.result;
      dispatch({
        type: UPLOAD_PRESENTATION,
        payload: {
          file,
          fileName: selectedFile.name,
        },
      });
    };
  };

  return <input onChange={onUpload} type={'file'} />;
};
