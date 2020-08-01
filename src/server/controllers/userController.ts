import { User, userInit } from '../models/User';

export const userCreate = async(data: { firstName: string, lastName: string, email: string, login: string, password: string }) => {
  const { firstName, lastName, email, login, password } = data;

  try {
    const init = await userInit();

    if (init) {
      const newUser = await User.create({ firstName, lastName, email, login, password });

      return newUser.toJSON();
    }
  } catch (error) {
    console.log(`error - ${error}`)
  }
};

export const userUpdate = async(id: string, data: { firstName?: string, lastName?: string, email?: string, login?: string, password?: string }) => {
  const { firstName, lastName, email, login, password } = data;

  try {
    const init = await userInit();

    if (init) {
      const userUpdate = await User.update(
        { firstName, lastName, email, login, password },
        { where: { id } }
      );

      if (userUpdate) {
        const user = await User.findByPk(id);

        return { user };
      } 
      
      return false;
    }
  } catch (error) {
    console.log(`error - ${error}`);
  }
};

export const userDelete = async(id: string) => {
  try {
    const init = await userInit();

    if (init) {
      const userDelete = await User.destroy({ where: { id } });

      return userDelete;
    }
  } catch (error) {
    console.log(`error - ${error}`);
  }
};

export const getUser = async(id: string) => {
  try {
    const init = await userInit();

    if (init) {
      const user = await User.findByPk(id);

      return user;
    }
  } catch (error) {
    console.log(`error - ${error}`);
  }
};

export const getUsers = async() => {
  try {
    const init = await userInit();

    if (init) {
      const users = await User.findAll();

      return users;
    }
  } catch (error) {
    console.log(`error - ${error}`);
  }
};