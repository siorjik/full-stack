import { getUserPath, getUserEntitiesPath, usersPath } from '../../../../utils/paths';

export default (id = null) => [
  {
    title: 'Users',
    path: usersPath,
  },
  {
    title: 'Info',
    path: getUserPath(id),
  },
  {
    title: 'Entity',
    path: getUserEntitiesPath(id),
  }
];
