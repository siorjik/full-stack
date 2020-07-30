import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import List from './containers/List';
import Info from './containers/Info';
import Entity from './containers/Entity';

import navigation from './utils/navigation';
import { usersPath, userPath, userEntitiesPath } from '../../../utils/paths';

const User = (props) => {
  const { user: { data }} = props;

  const getContent = (Comp) => (
    <>
      <Navigation navigationData={navigation(data.id)} />
      {Comp}
    </>
  );

  return (
    <Layout>
      <div className="content-container">
        <Switch>
          <Route exact path={usersPath}><List /></Route>
          <Route exact path={userPath} render={() => getContent(<Info />)} />
          <Route exact path={userEntitiesPath} render={() => getContent(<Entity />)} />
        </Switch>
      </div>
    </Layout>
  );
};

User.propTypes = {
  user: PropTypes.shape(),
}

User.defaultProps = {
  user: {},
};

const mapSateProps = (state) => ({
  user: state.user,
});

export default withRouter(connect(mapSateProps, {})(User));
