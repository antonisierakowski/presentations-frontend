import { combineReducers } from 'redux';
import { notificationsReducer } from './notifications/reducer';
import { userReducer } from './user/reducer';
import { presentationReducer } from './presentation/reducer';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

export const createRootReducer = (history: History) =>
  combineReducers({
    notificationsState: notificationsReducer,
    userState: userReducer,
    presentationState: presentationReducer,
    router: connectRouter(history),
  });
