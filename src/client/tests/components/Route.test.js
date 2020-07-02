import React from 'react';
import { shallow } from 'enzyme';

import Router from '../../components/Router';

it('should exist and has a child', () => {
  const comp = shallow(<Router />);

  expect(comp.exists()).toBeTruthy();
  expect(comp).toHaveLength(1);
  expect(comp.children()).toHaveLength(1);
});
