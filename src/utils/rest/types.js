const getTypeName = (source = null, str) => {
  return source ? `${source.toUpperCase()}_${str}`: str;
};

export default (source = null) => ({
  fetchAllStart: getTypeName(source, 'FETCH_ALL_START' ),
  fetchAllFinished: getTypeName(source, 'FETCH_ALL_FINISHED'),

  fetchOneStart: getTypeName(source, 'FETCH_ONE_START'),
  fetchOneFinished: getTypeName(source, 'FETCH_ONE_FINISHED'),

  fetchSessionStart: getTypeName(source, 'FETCH_SESSION_START'),
  fetchSessionFinished: getTypeName(source, 'FETCH_SESSION_FINISHED'),
  deleteSession: getTypeName(source, 'DELETE_SESSION'),

  updateOneStart: getTypeName(source, 'UPDATE_ONE_START'),
  updateOneFinished: getTypeName(source, 'UPDATE_ONE_FINISHED'),
});