import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';

import config from '../utils/config';
import SequelizeService from './services/sequelizeService';
import routes from './routes';
import { sessionMap } from './models/Session';

const { dbName, dbUser, dbPass, dbHost, dbDialect } = config;

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app: express.Application = express();

// sequelize initialization
const sequelize: SequelizeService = new SequelizeService(dbName, dbUser, dbPass, dbHost, dbDialect);
sequelize.getConnection();
sequelize.checkConnection();

// initialization sequelize store
sequelize.sequelizeClass.define('sessions', sessionMap);
const myStore = new SequelizeStore({ db: sequelize.sequelizeClass, table: 'sessions' });
myStore.sync();

const sessionStorage = {
  secret: 'user',
  saveUninitialized: false,
  resave: false,
  store: myStore,
};

app.use(cors());
app.use(bodyParser.json());
app.use(session(sessionStorage));

app.get('/', (req: any, res: any, next: any): void => {
  res.send('Hello World!');
});

// all api routes
app.use('/api', routes);

app.listen(8080, (): void => {
  console.log('Example app listening on port 8080!');
});

app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
