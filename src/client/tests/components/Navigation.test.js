import React from 'react';
import { shallow } from 'enzyme';

import Navigation from '../../components/Navigation';

import navigation from '../../pages/User/utils/navigation';

const props = {
  navigationData: navigation(),
}

it('should be exist and has a children', () => {
  const comp = shallow(<Navigation { ...props } />);

  expect(comp.exists()).toBeTruthy();
  expect(comp.children().length).toEqual(navigation().length);
});
