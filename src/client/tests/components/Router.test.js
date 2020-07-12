import React from 'react';
import { shallow } from 'enzyme';

import Router from '../../components/Router';
import configureStore from '../../store';

const store = configureStore();

it('should exist and has a child', () => {
  const comp = shallow(<Router store={store} />);

  expect(comp.exists()).toBeTruthy();
  expect(comp).toHaveLength(1);
  expect(comp.children()).toHaveLength(1);
});
