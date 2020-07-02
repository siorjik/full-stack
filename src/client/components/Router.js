import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../pages/App';
import User from '../pages/User';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/"><App /></Route>
      <Route exact path="/user"><User /></Route>
    </Switch>
  </BrowserRouter>
);
