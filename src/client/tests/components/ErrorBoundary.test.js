import React from "react";
import { shallow } from 'enzyme';

import ErrorBoundary from '../../components/ErrorBoundary';
import Router from '../../components/Router';

let comp;

beforeEach(() => comp = shallow(<ErrorBoundary />));

it('should exist', () => {
  expect(comp.exists()).toBeTruthy();
  expect(comp).toHaveLength(1);
});

it('should has children', () => {
  expect(comp.children()).toBeTruthy();
  expect(comp.find(Router)).toBeTruthy();
});

it('should has state', () => {
  const state = { hasErr: false };

  expect(comp.state()).toEqual(state);
});

describe('check methods', () => {
  let instanceComp;
  const mockFunc = methodName => jest.spyOn(instanceComp, methodName);

  beforeEach(() => {
    instanceComp = comp.instance();
    jest.resetAllMocks();
  });

  it('check  checkresponse', () => {
    const spy = mockFunc('checkResponse')
  
    instanceComp.checkResponse();
  
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('check  getErrorTemplate', () => {
    const spy = mockFunc('getErrorTemplate');
  
    instanceComp.getErrorTemplate();
    instanceComp.getErrorTemplate();
  
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(2);
  });
});

