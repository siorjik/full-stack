import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Form from '../../components/Form';

import { fetchSession } from '../../sagas/session';
import { usersPath } from '../../../utils/paths';
import getValidations from '../../../utils/helpers/getValidations';
import validations from './utils/validations';

const Login = (props) => {
  const { fetchSession, session, history } = props;

  const [form, setForm] = useState({ login: '', password: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const isSession = !!Object.keys(session.data).length;

    if (isSession) history.push(usersPath);
  }, [session.data, history]);

  const onChange = (name, value) => {
    setForm({ ...form, [name]: value });
    setErrors({});
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const errs = getValidations(validations, form);

    if(Object.keys(errs).length) {
      setErrors(errs);
      return false;
    } else fetchSession(form.login, form.password);
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
      errors: errors.login,
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      value: form.password,
      fieldClass: 'field',
      labelClass: 'label top',
      required: true,
      errors: errors.password,
    },
  ];

  return (
    <div className="height-100-vh flex justify-center align-center">
      <Form data={formData} onChange={onChange} submit={onSubmit} formClass="width-30-percent width-300-max text-center" />
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
