import config from './config';

//-------------- App paths
export const usersPath = '/user';
export const userPath = '/user/:id';
export const userEntitiesPath = `${userPath}/entities`;
export const getUserPath = (id) => `/user/${id}`;
export const getUserEntitiesPath = (id) => `/user/${id}/entities`;

export const loginPath = '/login';
export const profilePath = '/profile';

//--------------- Api paths
const apiPath = config.apiPath;

// user
export const fetchUsersPath = `${apiPath}/user`;
export const getUserPathApi = id => `${fetchUsersPath}/${id}`;

// session
export const fetchSessionPath = `${apiPath}/session`;
