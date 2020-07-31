import axios from 'axios';
import { runSaga } from 'redux-saga';

import { fetchSessionWorker } from '../../sagas/session';
import initialState from '../../../utils/rest/initialState';

jest.mock('axios');

it('fetch session', async() => {
  const dispatched = [];

  const apiResult = { data: { user: { id: 2 } } };

  const request = axios.post.mockResolvedValue(apiResult);

  const store = {
    getState: () => ({ ...initialState }),
    dispatch: action => dispatched.push(action),
  };

  await runSaga(store, fetchSessionWorker).toPromise();

  expect(request).toHaveBeenCalledTimes(1);
  expect(dispatched[0].payload.data).toEqual(apiResult.data);
});
