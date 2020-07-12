import React from 'react';
import { mount } from 'enzyme';

import Login from '../../pages/Login';
import configureStore from '../../store';

const store = configureStore();
const props = { session: { data: {} }, fetchSession: jest.fn()};
let comp, form;

beforeEach(() => {
  comp = mount(<Login.WrappedComponent store={store} { ...props } />);
  form = comp.find('form');
});

it('should exist and has a child', () => {
  expect(comp.length).toEqual(1);
  expect(comp.children().length).toEqual(1);
});

describe('work with state and onChange', () => {
  const setState = jest.fn();
  const spy = jest.spyOn(React, "useState").mockImplementation((init) => [init, setState]);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('login', () => {
    const login = form.find('input[name="login"]');
    const loginValue = 'your login';

    login.simulate('change', { target: { name: 'login', value: loginValue }});

    React.useState(loginValue);

    expect(login.instance().value).toEqual(loginValue);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(loginValue);
  });

  it('password', () => {
    const pass = form.find('input[name="password"]');
    const passValue = 'your password';

    pass.simulate('change', { target: { name: 'password', value: passValue }});

    React.useState(passValue);
    React.useState(passValue);

    expect(pass.instance().value).toEqual(passValue);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(passValue);
  });
});

it('submit', () => {
  const btn = form.find('input[type="submit"]');
  const click = comp.prop('fetchSession');

  form.simulate('submit');
  btn.simulate('submit');

  expect(click).toHaveBeenCalledTimes(2);
});
