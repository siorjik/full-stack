import React from 'react';
import { mount } from 'enzyme';

import Field from '../../components/Field';

const mock = jest.fn();
const props = { onChange: mock, value: 'zzz', errors: [{}, {}] };
let comp;

beforeEach(() => {
  comp = mount(<Field { ...props } />);
});

it('should exist and has children', () => {
  expect(comp.exists()).toBeTruthy();
  expect(comp.children().exists()).toBeTruthy();
});

it('change', () => {
  const input = comp.find('input');

  input.simulate('change');

  expect(input.instance().value).toEqual(props.value);
  expect(mock).toHaveBeenCalled();
});

it('display ErrorField if errors exist', () => {
  const errField = comp.find('.error-wrap');

  expect(errField.children().length).toEqual(props.errors.length);
});

it('not to display ErrorField when no errors', () => {
  comp.setProps({ errors: [] });

  const errField = comp.find('.error-wrap');

  expect(errField.exists()).toBeFalsy();
});
