import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { IndexPage } from '../Pages/IndexPage';
import { PresentationPage } from '../Pages/PresentationPage';
import { NotFoundPage } from '../Pages/NotFoundPage';

export const Routing: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <IndexPage />
      </Route>
      <Route path="/presentation/:presentationId">
        <PresentationPage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
);
