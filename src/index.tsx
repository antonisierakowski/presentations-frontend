import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { store } from './store';
import { initAction } from './store/app/actions';
import { Provider } from 'react-redux';
import './index.css';

store.dispatch(initAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
