import { takeEvery, put, call } from 'redux-saga/effects';

import setAuthToken from '../../utils/helpers/setAuthToken';

import restTypes from '../../utils/rest/types';
import {
  fetchSessionPath,
} from '../../utils/paths';

import {
  fetchStart,
  fetchFinished,
} from '../actions/session';

import apiRequest from '../../utils/rest/apiRequest';

const {
  fetchSessionStart,
} = restTypes();

const params = {};

export const fetchSession = (login, password) => {
  if (login && password) {
    params.login = login;
    params.password = password;
  }

  return fetchStart();
};

export const getSession = () => apiRequest('post', fetchSessionPath, null,  params);

export function* fetchSessionWorker() {
  try {
    const session = yield call(getSession);

    setAuthToken(session.user.token);
    
    yield put(fetchFinished(session)); 
  } catch (error) {
    yield put(fetchFinished(error));
  }
}

export function* fetchSessionWatcher() {
  yield takeEvery(fetchSessionStart, fetchSessionWorker);
}
