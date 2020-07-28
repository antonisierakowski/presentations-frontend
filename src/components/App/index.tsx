import React from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const onSubmit = (event: any) => {
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

  return (
    <div className="App">
      <input onChange={onSubmit} type={'file'} />
    </div>
  );
}

export default App;
