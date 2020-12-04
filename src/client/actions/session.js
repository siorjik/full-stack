import RestActions from '../../utils/rest/actions';

const {
  fetchSessionStart,
  fetchSessionFinished,
  deleteSession: removeSession,
} = new RestActions();

export const fetchStart = () => fetchSessionStart();
export const fetchFinished = (data) => fetchSessionFinished(data);
export const deleteSession = () => removeSession();
