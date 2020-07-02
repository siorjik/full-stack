import config from './config';

// Api paths
const apiPath = config.apiPath;

// user
export const fetchUsersPath = `${apiPath}/user`;
export const fetchUserPath = id => `${fetchUsersPath}/${id}`;
