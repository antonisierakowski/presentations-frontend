import { NotificationState } from './notifications/reducer';
import { UserState } from './user/reducer';

export interface RootState {
  userState: UserState;
  notificationsState: NotificationState;
  presentationState: any; // todo
}

export interface Action<TPayload = any> {
  type: string;
  payload?: TPayload;
}
