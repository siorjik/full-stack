import React from 'react';
import { shallow } from 'enzyme';

import routerHOC from '../../hoc/routerHOC';
import configureStore from '../../store';
import Router from '../../components/Router';

const store = configureStore();

it('should exist and has a child with props', () => {
  const Hoc = routerHOC(Router);
  const comp = shallow(<Hoc store={store} />);
  const routerWrapper = comp.childAt(0);

  expect(comp.length).toEqual(1);
  expect(comp.children().length).toEqual(1);
  expect(comp.find(routerWrapper.name()).length).toEqual(1);
  expect(routerWrapper.props('session')).toBeTruthy();
  expect(routerWrapper.props('fetchSession')).toBeTruthy();
});
