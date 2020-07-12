import restInitialState from '../../utils/rest/initialState';
import restTypes from '../../utils/rest/types';
import restStates from '../../utils/rest/states';

const {
  fetchSessionStart,
  fetchSessionFinished,
} = restTypes();

const {
  fetchSessionStart: fetchSessionStartState,
  fetchSessionFinished: fetchSessionFinishedState,
} = restStates;

export default(state = restInitialState, action = {}) => {
  switch(action.type) {
    case fetchSessionStart:
      return{
        ...state,
        ...fetchSessionStartState,
      };

    case fetchSessionFinished:
      return{
        ...state,
        ...fetchSessionFinishedState,
        ...action.payload,
      };

    default: return state;
  }
};
