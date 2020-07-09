import { Op } from 'sequelize';

import { User, userInit } from '../models/User';
import { sessionInit, Session } from '../models/Session'

export const getSessionUser = async(login: string, password: string) => {
  try {
    const init = await userInit();

    if (init) {
      const user = await User.findOne({
        where: { login, password }
      });

      return user;
    }
  } catch (error) {
    console.error(`error - ${error}`);
  }
};

export const checkSession = async(login: string, password: string) => {
  try {
    const init = await sessionInit();

    if (init) {
      const getRow = await Session.findAndCountAll({
        where: {
          data: { [Op.substring]: login, [Op.substring]: password },        
        },
      });

      return getRow.count;
    }
  } catch (error) {
    console.error(`error - ${error}`);
  }
};
