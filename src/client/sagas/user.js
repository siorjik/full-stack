import { takeEvery, put, call } from 'redux-saga/effects';

import restTypes from '../../utils/rest/types';
import {
  fetchUsersPath,
  getUserPathApi,
} from '../../utils/paths';

import {
  fetchUsersStart,
  fetchUsersFinished,
  fetchUserStart,
  fetchUserFinished,
  updateUserStart,
  updateUserFinished,
} from '../actions/user';

import apiRequest from '../../utils/rest/apiRequest';

const {
  fetchAllStart,
  fetchOneStart,
  updateOneStart,
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

const getUserData = () => apiRequest('get', getUserPathApi(params.id), 'user');

export function* fetchUserWorker() {
  const user = yield call(getUserData);

  yield put(fetchUserFinished(user));
};

export function* fetchUserWatcher() {
  yield takeEvery(fetchOneStart, fetchUserWorker);
};

//update user
export const updateUser = (id, data) => {
  params.id = id;
  params.data = data;

  return updateUserStart();
};

const getUpdateUser = () => apiRequest('put', getUserPathApi(params.id), 'user', params.data);

export function* updateUserWorker() {
  const user = yield call(getUpdateUser);

  yield put(updateUserFinished(user));
};

export function* updateUserWatcher() {
  yield takeEvery(updateOneStart, updateUserWorker);
};
