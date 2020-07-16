import { Model, DataTypes } from 'sequelize';

import SequelizeService from '../services/sequelizeService';

const sequelize: SequelizeService = new SequelizeService();

export class Session extends Model {
  public sid!: string;
  public userId!: string;
  public expires!: Date;
  public login!: string;
  public password!: string;
  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

export const sessionMap = {
  sid: {
    type: new DataTypes.STRING(128),
    primaryKey: true,
  },
  userId: {
    type: new DataTypes.STRING(128),
  },
  expires: {
    type: DataTypes.DATE,
  },
  login: {
    type: new DataTypes.STRING(128),
  },
  password: {
    type: new DataTypes.STRING(128),
  },
  data: new DataTypes.STRING(50000),
};

export const sessionInit = () => {
  Session.init(
    sessionMap,
    {
      tableName: 'sessions',
      sequelize: sequelize.sequelizeClass,
    }
  );

  return sequelize.sequelizeClass.sync();
};
