import { getUserPath, getUserEntitiesPath, usersPath } from '../../../../utils/paths';

export default (id = null) => [
  {
    title: 'List',
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
