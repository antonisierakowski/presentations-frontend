import React from 'react';
import { NotificationContainer } from '../Notification/NotificationContainer';
import './styles.css';
import { Routing } from '../Routing';

export const App: React.FC = () => (
  <div className="App">
    <NotificationContainer />
    <Routing />
  </div>
);
