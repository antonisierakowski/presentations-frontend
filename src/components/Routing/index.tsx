import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { IndexPage } from '../Pages/IndexPage';
import { PresentationPage } from '../Pages/PresentationPage';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../store';

export const Routing: React.FC = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/">
        <IndexPage />
      </Route>
      <Route path="/:presentationId">
        <PresentationPage />
      </Route>
    </Switch>
  </ConnectedRouter>
);
