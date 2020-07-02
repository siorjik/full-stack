const Sequelize = require('sequelize');

class SequelizeService {
  private connect: () => void;
  public sequelizeClass: typeof Sequelize;

  constructor(private db: string | undefined, private user: string | undefined, private pass: string | undefined, private host: string |undefined, private dialect: string | undefined) {
    this.sequelizeClass = new Sequelize(db, user, pass, { host, dialect });

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
