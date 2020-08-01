export default {
  fetchAllStart: { fetchAll: true, fetchedAll: false },
  fetchAllFinished: { fetchAll: false, fetchedAll: true },

  fetchOneStart: { fetchOne: true, fetchedOne: false },
  fetchOneFinished: { fetchOne: false, fetchedOne: true },

  fetchSessionStart: { fetchSession: true, fetchedSession: false },
  fetchSessionFinished: { fetchSession: false, fetchedSession: true },

  updateOneStart: { updateOne: true, updatedOne: false },
  updateOneFinished: { updateOne: false, updatedOne: true },
};