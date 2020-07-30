import { useDispatch } from 'react-redux';
import React from 'react';
import { uploadPresentation } from '../../store/presentation/actions';

interface UseFileUploadHook {
  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useFileUpload = (): UseFileUploadHook => {
  const dispatch = useDispatch();

  const onUpload = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.currentTarget.files[0];

      const fileReader = new FileReader();
      if (selectedFile) {
        fileReader.readAsArrayBuffer(selectedFile);
      }

      fileReader.onload = function (fileLoadedEvent: any) {
        const file = fileLoadedEvent.target.result;
        dispatch(
          uploadPresentation({
            file,
            fileName: selectedFile.name,
          }),
        );
      };
    },
    [dispatch],
  );

  return {
    onUpload,
  };
};
