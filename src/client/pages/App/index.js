import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo.svg';

import { fetchUsers, fetchUser } from '../../sagas/user';

const App = ({ fetchUsers, fetchUser, user }) => {
  useEffect(() => {
    fetchUsers();
    fetchUser(4);
    fetchUser(7);
  }, []);

  return (
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
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = { fetchUsers, fetchUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);
