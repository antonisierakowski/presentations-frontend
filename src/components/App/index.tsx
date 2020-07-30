import React from 'react';
import { NotificationContainer } from '../Notification/NotificationContainer';
import styles from './styles.module.css';
import { Routing } from '../Routing';

export const App: React.FC = () => (
  <div className={styles.App}>
    <NotificationContainer />
    <Routing />
  </div>
);
