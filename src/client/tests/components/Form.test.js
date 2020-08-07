import React from 'react';
import { mount } from 'enzyme'

import Form from '../../components/Form';

const mock = jest.fn();
const props = { submit: mock, data: [{}, {}] };
let comp;

beforeAll(() => {
  comp = mount(<Form { ...props } />);
});

it('should exist and has children', () => {
  expect(comp.exists()).toBeTruthy();
  expect(comp.find('form').children().length).toEqual(props.data.length + 1);
});

it('submit', () => {
  const btn = comp.find('button[type="submit"]');

  btn.simulate('submit');
  comp.find('form').simulate('submit', { preventDefault: () => {} });

  expect(mock).toHaveBeenCalledTimes(2);
});
