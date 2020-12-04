import { all, fork } from 'redux-saga/effects';

import {
  fetchUsersWatcher,
  fetchUserWatcher,
  updateUserWatcher,
} from './user';
import { fetchSessionWatcher, deleteSessionWatcher } from './session';

export default function* rootSaga() {
  yield all([
    fork(fetchUsersWatcher),
    fork(fetchUserWatcher),
    fork(fetchSessionWatcher),
    fork(updateUserWatcher),
    fork(deleteSessionWatcher),
  ]);
};
