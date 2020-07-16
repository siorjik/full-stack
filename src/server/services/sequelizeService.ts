const Sequelize = require('sequelize');
import config from '../../utils/config';

const { dbName, dbUser, dbPass, dbHost, dbDialect } = config;

class SequelizeService {
  private connect: () => void;
  public sequelizeClass: typeof Sequelize;

  constructor(
    private db: string | undefined = dbName,
    private user: string | undefined = dbUser,
    private pass: string | undefined = dbPass,
    private host: string |undefined = dbHost,
    private dialect: string | undefined = dbDialect
  ) {
    this.sequelizeClass = new Sequelize(db, user, pass,
      {
        host,
        dialect,
        define: {
          timestamps: false,
        },
      }
    );

    this.connect = () => {
      if (db && user && pass && host && dialect) {
        return this.sequelizeClass;
      } else console.log('Connection was failed!');
    }
  }

  public getConnection = () => this.connect();

  public checkConnection = (): void => {
    this.sequelizeClass
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err: any) => {
      console.error('Unable to connect to the database:', err);
    });
  }
}

export default SequelizeService;
