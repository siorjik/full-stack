import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import logo from '../../assets/images/logo.svg';
import Layout from '../../components/Layout';

import { fetchUsers, fetchUser } from '../../sagas/user';

const App = (props) => {
  const { fetchUsers, fetchUser, user } = props;

  /*useEffect(() => {
    fetchUsers();
    fetchUser(4);
    fetchUser(7);
  }, []);*/

  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = { fetchUsers, fetchUser };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
