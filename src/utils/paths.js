import config from './config';

// App paths
export const userPath = '/user';
export const loginPath = '/login';

// Api paths
const apiPath = config.apiPath;

// user
export const fetchUsersPath = `${apiPath}/user`;
export const fetchUserPath = id => `${fetchUsersPath}/${id}`;

// session
export const fetchSessionPath = `${apiPath}/session`;
