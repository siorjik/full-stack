import RestActions from '../../utils/rest/actions';

const {
  fetchSessionStart,
  fetchSessionFinished,
} = new RestActions();

export const fetchStart = () => fetchSessionStart();
export const fetchFinished = (data) => fetchSessionFinished(data);
