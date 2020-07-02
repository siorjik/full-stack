import { takeEvery, put, call } from 'redux-saga/effects';

import restTypes from '../../utils/rest/types';
import {
  fetchUsersPath,
  fetchUserPath,
} from '../../utils/paths';

import {
  fetchUsersStart,
  fetchUsersFinished,
  fetchUserStart,
  fetchUserFinished,
} from '../actions/user';

import apiRequest from '../../utils/rest/apiRequest';

const {
  fetchAllStart,
  fetchOneStart,
} = restTypes('user');

const params = {};

// fetch users
export const fetchUsers = () => fetchUsersStart();

export const getUserList = () => apiRequest('get', fetchUsersPath, 'users');

export function* fetchUsersWorker() {
  try {
    const users = yield call(getUserList);

    yield put(fetchUsersFinished(users)); 
  } catch (error) {
    yield put(fetchUsersFinished(error));
  }
};

export function* fetchUsersWatcher() {
  yield takeEvery(fetchAllStart, fetchUsersWorker);
};

//fetch user
export const fetchUser = id => {
  params.id = id;

  return fetchUserStart();
};

const getUserData = () => apiRequest('get', fetchUserPath(params.id), 'user');

export function* fetchUserWorker() {
  const user = yield call(getUserData);

  yield put(fetchUserFinished(user));
};

export function* fetchUserWatcher() {
  yield takeEvery(fetchOneStart, fetchUserWorker);
};
