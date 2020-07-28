import { combineReducers } from 'redux';
import { notificationsReducer } from './notifications/reducer';
import { userReducer } from './user/reducer';
import { presentationReducer } from './presentation/reducer';

export const rootReducer = combineReducers({
  notificationsState: notificationsReducer,
  userState: userReducer,
  presentationState: presentationReducer,
});
