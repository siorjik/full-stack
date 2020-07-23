import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';

const User = () => {
  return (
    <Layout>
      <h2>Users</h2>
    </Layout>
  );
};

export default withRouter(connect(null, {})(User));
