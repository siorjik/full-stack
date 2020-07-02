import RestActions from '../../utils/rest/actions';

const {
  fetchAllStart,
  fetchAllFinished,
  fetchOneStart,
  fetchOneFinished,
} = new RestActions('user');

export const fetchUsersStart = () => fetchAllStart();
export const fetchUsersFinished = (data) => fetchAllFinished(data);

export const fetchUserStart = () => fetchOneStart();
export const fetchUserFinished = (data) => fetchOneFinished(data);
