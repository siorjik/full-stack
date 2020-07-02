import { User, userInit } from '../models/User';

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
    
  }
};
