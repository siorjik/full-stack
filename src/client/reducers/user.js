import restInitialState from '../../utils/rest/initialState';
import restTypes from '../../utils/rest/types';
import restStates from '../../utils/rest/states';

const {
  fetchAllStart,
  fetchAllFinished,
  fetchOneStart,
  fetchOneFinished,
} = restTypes('user');

const {
  fetchAllStart: fetchAllStartState,
  fetchAllFinished: fetchAllFinishedState,
  fetchOneStart: fetchOneStartState,
  fetchOneFinished: fetchOneFinishedState,
} = restStates;

export default (state = restInitialState, action = {}) => {
  switch(action.type) {
    case fetchAllStart:
      return {
        ...state,
        ...fetchAllStartState,
      };

    case fetchAllFinished:
      return {
        ...state,
        ...fetchAllFinishedState,
        ...action.payload,
      };

    case fetchOneStart:
      return {
        ...state,
        ...fetchOneStartState,
      };

    case fetchOneFinished:
      return {
        ...state,
        ...fetchOneFinishedState,
        ...action.payload,
      };

    default: return state;
  }
};
