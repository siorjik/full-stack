import { all, fork } from 'redux-saga/effects';

import {
  fetchUsersWatcher,
  fetchUserWatcher,
} from './user';
import { fetchSessionWatcher } from './session';

export default function* rootSaga() {
  yield all([
    fork(fetchUsersWatcher),
    fork(fetchUserWatcher),
    fork(fetchSessionWatcher),
  ]);
};
