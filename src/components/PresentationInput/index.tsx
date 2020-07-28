import React from 'react';
import { useDispatch } from 'react-redux';

export const PresentationInput: React.FC = () => {
  const dispatch = useDispatch();
  const onUpload = (event: any) => {
    const selectedFile = event.target.files[0];

    const fileReader = new FileReader();

    fileReader.onload = function (fileLoadedEvent: any) {
      const file = fileLoadedEvent.target.result;
      console.log(selectedFile.name);
      dispatch({
        type: 'UPLOAD_PRESENTATION',
        payload: {
          file,
          name: selectedFile.name,
        },
      });
    };

    fileReader.readAsBinaryString(selectedFile);
  };

  return <input onChange={onUpload} type={'file'} />;
};
