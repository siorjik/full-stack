import reducer from '../../reducers/session';
import initialState from '../../../utils/rest/initialState';
import RestActions from '../../../utils/rest/actions';
import restStates from '../../../utils/rest/states';

const {
  fetchSessionStart,
  fetchSessionFinished,
} = new RestActions();

const {
  fetchSessionStart: fetchSessionStartState,
  fetchSessionFinished: fetchSessionFinishedState,
} = restStates;

it('session start', () => {
  expect(reducer(initialState, fetchSessionStart())).toEqual({
    ...initialState,
    ...fetchSessionStartState,
  });
});

it('session finished', () => {
  expect(reducer(initialState, fetchSessionFinished())).toEqual({
    ...initialState,
    ...fetchSessionFinishedState,
    ...fetchSessionFinished().payload,
  });
});
