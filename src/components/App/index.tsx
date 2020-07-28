import React from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log(event.target.files[0]);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input onChange={onSubmit} type={'file'} />
        <button type={'submit'}>submit</button>
      </form>
    </div>
  );
}

export default App;
