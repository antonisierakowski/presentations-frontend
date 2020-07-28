import { NotificationState } from './notifications/reducer';

export interface RootState {
  userState: any; // todo
  notificationsState: NotificationState;
  presentationState: any; // todo
}

export interface Action<TPayload = any> {
  type: string;
  payload?: TPayload;
}
