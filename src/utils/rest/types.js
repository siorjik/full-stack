export default (source) => ({
  fetchAllStart: `${source.toUpperCase()}_FETCH_ALL_START`,
  fetchAllFinished: `${source.toUpperCase()}_FETCH_ALL_FINISHED`,

  fetchOneStart: `${source.toUpperCase()}_FETCH_ONE_START`,
  fetchOneFinished: `${source.toUpperCase()}_FETCH_ONE_FINISHED`,
});