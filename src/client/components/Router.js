import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from '../pages/App';
import User from '../pages/User';
import Login from '../pages/Login';

import routerHOC from '../hoc/routerHOC';

import {
  usersPath,
  loginPath
} from '../../utils/paths';

const Router = ({ isSession }) => {
  const { push } = createBrowserHistory();

  if (!isSession) push(loginPath);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Redirect to={usersPath} /></Route>
        <Route exact path="/app"><App /></Route>
        <Route exact path={usersPath}><User /></Route>
        <Route exact path={loginPath}><Login /></Route>
        <Route exact path="*"><User /></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default routerHOC(Router);
