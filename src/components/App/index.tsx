import React from 'react';
import { NotificationContainer } from '../Notification/NotificationContainer';
import { Routing } from '../Routing';

export const App: React.FC = () => (
  <>
    <NotificationContainer />
    <Routing />
  </>
);
