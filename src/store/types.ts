import { NotificationState } from './notifications/reducer';
import { UserState } from './user/reducer';
import { PresentationState } from './presentation/reducer';
import { RouterState } from 'connected-react-router';

export interface RootState {
  userState: UserState;
  notificationsState: NotificationState;
  presentationState: PresentationState;
  router: RouterState;
}

export interface Action<TPayload = any> {
  type: string;
  payload?: TPayload;
}
