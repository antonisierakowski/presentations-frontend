import { NotificationState } from './notifications/reducer';
import { UserState } from './user/reducer';
import { PresentationState } from './presentation/reducer';

export interface RootState {
  userState: UserState;
  notificationsState: NotificationState;
  presentationState: PresentationState;
}

export interface Action<TPayload = any> {
  type: string;
  payload?: TPayload;
}
