import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Action, RootState } from './types';
import rootSaga from './rootSaga';
import { rootReducer } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store: Store<RootState, Action> = createStore(
  rootReducer,
  middleware,
);

sagaMiddleware.run(rootSaga);
