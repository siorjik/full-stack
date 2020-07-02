import { Model, DataTypes } from 'sequelize';

import SequelizeService from '../services/sequelizeService';
import config from '../../utils/config';

const { dbName, dbUser, dbPass, dbHost, dbDialect } = config;

const sequelize: SequelizeService = new SequelizeService(dbName, dbUser, dbPass, dbHost, dbDialect);

export class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public login!: string;
  public password!: string;
  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

export const userInit = () => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      lastName: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      login: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      password: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      }
    },
    {
      tableName: 'users',
      sequelize: sequelize.sequelizeClass,
    }
  );

  return sequelize.sequelizeClass.sync();
}
