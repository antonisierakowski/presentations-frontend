import { NotificationState } from './notifications/reducer';
import { UserState } from './user/reducer';
import { PresentationState } from './presentation/reducer';
import { RouterState } from 'connected-react-router';
import { AppState } from './app/reducer';

export interface RootState {
  appState: AppState;
  userState: UserState;
  notificationsState: NotificationState;
  presentationState: PresentationState;
  router: RouterState;
}

export interface Action<TPayload = any> {
  type: string;
  payload?: TPayload;
}
