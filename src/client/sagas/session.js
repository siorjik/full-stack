import { takeEvery, put, call } from 'redux-saga/effects';

import setAuthToken from '../../utils/helpers/setAuthToken';

import restTypes from '../../utils/rest/types';
import {
  fetchSessionPath,
} from '../../utils/paths';

import {
  fetchStart,
  fetchFinished,
  deleteSession,
} from '../actions/session';

import apiRequest from '../../utils/rest/apiRequest';

const {
  fetchSessionStart,
  deleteSession: deleteSessionType,
} = restTypes();

const params = {};

// fetch session
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

// delete session
export const removeSession = () => deleteSession();

export const deleteSessionRequest = () => apiRequest('delete', fetchSessionPath);

export function* deleteSessionWorker() {
  try {
    yield call(deleteSessionRequest); 
  } catch (error) {
    yield put(deleteSession(error));
  }
}

export function* deleteSessionWatcher() {
  yield takeEvery(deleteSessionType, deleteSessionWorker);
}
