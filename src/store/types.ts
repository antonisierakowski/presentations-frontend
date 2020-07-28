import { NotificationState } from './notifications/reducer';
import { UserState } from './user/reducer';
import { PresentationState } from './presentation/reducer';
import { LocationState } from 'history';

export interface RootState {
  userState: UserState;
  notificationsState: NotificationState;
  presentationState: PresentationState;
  router: LocationState;
}

export interface Action<TPayload = any> {
  type: string;
  payload?: TPayload;
}
