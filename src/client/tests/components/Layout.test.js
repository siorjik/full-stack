import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../../components/Layout';

let comp;
const props = { history: {} };

beforeEach(() => {
  comp = shallow(<Layout.WrappedComponent { ...props } />);
});

it('should exist and has a child', () => {
  expect(comp.length).toEqual(1);
  expect(comp.children().length).toEqual(2);
});

it('work with state and onClick', () => {
  const setState = jest.fn();
  const spy = jest.spyOn(React, "useState").mockImplementation((init) => [init, setState]);

  const btn = comp.childAt(1).find('button').first();
  jest.spyOn(Storage.prototype, 'setItem');

  btn.onClick = spy();
  btn.simulate('click');

  expect(btn.length).toEqual(1);
  expect(spy).toHaveBeenCalledTimes(1);
  expect(localStorage.setItem).toHaveBeenCalledTimes(1);
});
