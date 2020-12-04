import restTypes from './types';

export default class RestActions {
  constructor(source = null) {
    this.type = restTypes(source);
  }

  getActionType = (name) => {
    for(let [key, value] of Object.entries(this.type)) {
      if (key === name) return value;
    }

    return false;
  };

  fetchAllStart = () => ({ type: this.getActionType('fetchAllStart') });

  fetchAllFinished = (data) => {
    return {
      type: this.getActionType('fetchAllFinished'),
      payload: { list: data },
    }
  };  

  fetchOneStart = () => ({ type: this.getActionType('fetchOneStart') });

  fetchOneFinished = (data) => {
    return {
      type: this.getActionType('fetchOneFinished'),
      payload: { data },
    }
  };

  updateOneStart = () => ({ type: this.getActionType('updateOneStart') });

  updateOneFinished = (data) => {
    return {
      type: this.getActionType('updateOneFinished'),
      payload: { data },
    }
  };

  fetchSessionStart = () => ({ type: this.getActionType('fetchSessionStart') });
  
  fetchSessionFinished = (data) => {
    return {
      type: this.getActionType('fetchSessionFinished'),
      payload: { data },
    };
  };

  deleteSession = () => ({ type: this.getActionType('deleteSession') });
}

