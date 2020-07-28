import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Action, RootState } from './types';
import rootSaga from './rootSaga';
import { createRootReducer } from './rootReducer';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const middleware = composeWithDevTools(
  applyMiddleware(sagaMiddleware, routerMiddleware(history)),
);

export const store: Store<RootState, Action> = createStore(
  createRootReducer(history),
  middleware,
);

sagaMiddleware.run(rootSaga);
