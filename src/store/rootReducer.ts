import { combineReducers } from 'redux';
import { notificationsReducer } from './notifications/reducer';
import { userReducer } from './user/reducer';
import { presentationReducer } from './presentation/reducer';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { appReducer } from './app/reducer';

export const createRootReducer = (history: History) =>
  combineReducers({
    appState: appReducer,
    notificationsState: notificationsReducer,
    userState: userReducer,
    presentationState: presentationReducer,
    router: connectRouter(history),
  });
