import reducer from '../../reducers/user';
import initialState from '../../../utils/rest/initialState';
import RestActions from '../../../utils/rest/actions';
import restStates from '../../../utils/rest/states';

const {
  fetchAllStart,
  fetchAllFinished,
  fetchOneStart,
  fetchOneFinished,
} = new RestActions('user');

const {
  fetchAllStart: fetchAllStartState,
  fetchAllFinished: fetchAllFinishedState,
  fetchOneStart: fetchOneStartState,
  fetchOneFinished: fetchOneFinishedState,
} = restStates;

describe('fetch users', () => {
  it('fetch users start', () => {
    expect(reducer(initialState, fetchAllStart())).toEqual({
      ...initialState,
      ...fetchAllStartState,
    });
  });

  it('fetch users finished', () => {
    expect(reducer(initialState, fetchAllFinished())).toEqual({
      ...initialState,
      ...fetchAllFinishedState,
      ...fetchAllFinished().payload,
    });
  });
});

describe('fetch user', () => {
  it('fetch user start', () => {
    expect(reducer(initialState, fetchOneStart())).toEqual({
      ...initialState,
      ...fetchOneStartState,
    });
  });

  it('fetch user finished', () => {
    expect(reducer(initialState, fetchOneFinished())).toEqual({
      ...initialState,
      ...fetchOneFinishedState,
      ...fetchOneFinished().payload,
    });
  });
});
