import { useDispatch } from 'react-redux';
import { UPLOAD_PRESENTATION } from '../../store/presentation/constants';
import React from 'react';

interface UseFileUploadHook {
  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useFileUpload = (): UseFileUploadHook => {
  const dispatch = useDispatch();

  const onUpload = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.currentTarget.files[0];

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
    },
    [dispatch],
  );

  return {
    onUpload,
  };
};
