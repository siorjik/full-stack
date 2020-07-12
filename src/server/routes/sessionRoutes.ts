import { Router } from 'express';

import AuthService from '../services/authService';
import { getSessionUser } from '../controllers/sessionController';
import getResponse from '../../utils/helpers/getResponse';

const router: Router = Router();
const authService: AuthService = new AuthService();

router.post('/session', async(req: any, res: any, next: any) => {
  const { data: { login, password }} = req.body;
  const { authorization } = req.headers;
  let user;

  try {
    if (login && password) {
      user = await getSessionUser(login, password);
      const jwtToken = authService.setAuthToken(login, password);

      if (user) {
        req.session.login = login;
        req.session.password = password;

        res.send({ user: { ...user?.toJSON(), token: jwtToken }});
      } else res.status(404).send('user not found!');
    } else {
      getResponse(req, res, async({ login, password }) => {
        user = await getSessionUser(login, password);

        if (user) res.send({ user: { ...user?.toJSON(), token: authorization }});
      });
    }
  } catch (error) {
    res.send(`error - ${error.message}`);
  }
});

export default router;
