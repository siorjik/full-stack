const getTypeName = (str, source = null) => {
  return source ? `${source.toUpperCase()}_${str}`: str;
};

export default (source = null) => ({
  fetchAllStart: getTypeName('FETCH_ALL_START', source),
  fetchAllFinished: getTypeName('FETCH_ALL_FINISHED', source),

  fetchOneStart: getTypeName('FETCH_ONE_START', source),
  fetchOneFinished: getTypeName('FETCH_ONE_FINISHED', source),

  fetchSessionStart: getTypeName('FETCH_SESSION_START'),
  fetchSessionFinished: getTypeName('FETCH_SESSION_FINISHED'),

  updateOneStart: getTypeName('UPDATE_ONE_START', source),
  updateOneFinished: getTypeName('UPDATE_ONE_FINISHED', source),
});