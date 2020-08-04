import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Form from '../../components/Form';

import { fetchSession } from '../../sagas/session';
import { usersPath } from '../../../utils/paths';

const Login = (props) => {
  const { fetchSession, session, history } = props;

  const [form, setForm] = useState({ login: '', password: '' });

  useEffect(() => {
    const isSession = !!Object.keys(session.data).length;

    if (isSession) history.push(usersPath);
  }, [session.data, history]);

  const onChange = (name, value) => setForm({ ...form, [name]: value });

  const onSubmit = (e) => {
    e.preventDefault();
    fetchSession(form.login, form.password);
  };

  const formData = [
    {
      label: 'Login',
      type: 'text',
      name: 'login',
      value: form.login,
      fieldClass: 'field',
      labelClass: 'label top',
      required: true,
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      value: form.password,
      fieldClass: 'field',
      labelClass: 'label top',
      required: true,
    },
  ];

  return (
    <div className="height-100-vh flex justify-center align-center">
      <Form data={formData} onChange={onChange} submit={onSubmit} formClass="width-30-percent text-center" />
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
