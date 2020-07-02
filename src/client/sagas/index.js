import { all, fork } from 'redux-saga/effects';

import {
  fetchUsersWatcher,
  fetchUserWatcher,
} from './user';

export default function* rootSaga() {
  yield all([
    fork(fetchUsersWatcher),
    fork(fetchUserWatcher),
  ]);
};
