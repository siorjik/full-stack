import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { fetchSession } from '../../sagas/session';
import { usersPath } from '../../../utils/paths';

const Login = (props) => {
  const { fetchSession, session, history } = props;

  const [form, setForm] = useState({ login: '', password: '' });

  useEffect(() => {
    const isSession = !!Object.keys(session.data).length;

    if (isSession) history.push(usersPath);
  }, [session.data, history]);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    fetchSession(form.login, form.password);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <label>Login <input name="login" type="text" onChange={change} value={form.login} /></label>
        <label>Password <input name="password" type="password" onChange={change} value={form.password} /></label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

Login.propTypes = {
  fetchSession: PropTypes.func,
};

Login.defaultProps = {
  fetchSession: null,
};

const mapStatetoProps = (state) => ({
  session: state.session,
});

const mapDispatchToProps = {
  fetchSession,
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Login));
