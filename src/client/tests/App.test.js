import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import App from '../pages/App';
import configureStore from '../store';

const store = configureStore();
const props = { location: {} }

/*test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
describe('App rendering', () => {
  const appComponent = shallow(<App.WrappedComponent store={store} { ...props } />);
  //console.log(appComponent.debug());

  it('checking div length', () => {
    expect(appComponent.find('header').children().length).toEqual(3);
  });

  it('checking text in link', () => {
    expect(appComponent.find('.App-link').text()).toEqual('Learn React');
  });
});
