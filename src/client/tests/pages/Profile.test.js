import React from 'react';
import { shallow } from 'enzyme';

import Profile from '../../pages/Profile';

const props = { history: { goBack: () => {} } };
let comp;

beforeEach(() => {
  comp = shallow(<Profile.WrappedComponent { ...props } />);
});

it('should exist and has children', () => {
  expect(comp.exists()).toBeTruthy();
  expect(comp.children().length).toEqual(2);
});

it('go back arrow checking', () => {
  const btn = comp.find('button').first();
  const spy = jest.spyOn(props.history, 'goBack');

  btn.onClick = spy;
  btn.simulate('click');

  expect(spy).toHaveBeenCalledTimes(1);
});


