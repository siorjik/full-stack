import axios from 'axios';
import { runSaga } from 'redux-saga';

import { fetchUsersWorker, fetchUserWorker } from '../../sagas/user';
import initialState from '../../../utils/rest/initialState';

jest.mock('axios');

beforeEach(() => {
  jest.resetAllMocks();
});

it('fetch users', async() => {
  const dispatched = [];

  const apiResult = { data: { users: [1, 2] }};

  const request = axios.get.mockResolvedValue(apiResult);

  const store = {
    getState: () => ({ ...initialState }),
    dispatch: action => dispatched.push(action),
  };

  await runSaga(store, fetchUsersWorker).toPromise();

  expect(request).toHaveBeenCalledTimes(1);
  expect(dispatched[0].payload.list).toEqual(apiResult.data.users);
});

it('fetch user', async() => {
  const dispatched = [];

  const apiResult = { data: { user: { id: 1, name: 'test' } }};

  const request = axios.get.mockResolvedValue(apiResult);

  const store = {
    getState: () => ({ ...initialState }),
    dispatch: action => dispatched.push(action),
  };

  await runSaga(store, fetchUserWorker).toPromise();

  expect(request).toHaveBeenCalledTimes(1);
  expect(dispatched[0].payload.data).toEqual(apiResult.data.user);
});
