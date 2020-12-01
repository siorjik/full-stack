import { Router } from 'express';

import AuthService from '../services/authService';
import { getSessionUser } from '../controllers/sessionController';
import auth from '../../utils/helpers/auth';

const router: Router = Router();
const authService: AuthService = new AuthService();

router.post('/session', auth, async(req: any, res: any) => {
  const { authorization } = req.headers;
  const { login, password, isAuth } = req.userData;
  let user;
  try {
    if (!isAuth) {
      user = await getSessionUser(login, password);
      const jwtToken = authService.setAuthToken(login, password);
      if (user) {
        req.session.login = login;
        req.session.password = password;

        res.send({ user: { ...user?.toJSON(), token: jwtToken } });
      } else res.status(404).send('user not found!');
    } else {
      user = await getSessionUser(login, password);

      if (user) res.send({ user: { ...user?.toJSON(), token: authorization } });
    }
  } catch (error) {
    res.send(`error - ${error.message}`);
  }
});

export default router;
