import { Router } from 'express';

import AuthService from '../services/authService';
import { getSessionUser } from '../controllers/sessionController';

const router: Router = Router();
const authService: AuthService = new AuthService();

router.post('/session', async(req: any, res: any, next: any) => {
  const { data: { login, password }} = req.body;

  try {
    const user = await getSessionUser(login, password);
    const jwtToken = authService.setAuthToken(login, password);

    if (user) {
      console.log(req.session);
      req.session.login = login;
      req.session.password = password;

      res.send({ user: { ...user?.toJSON(), token: jwtToken }});
    } else res.send('user not found!');
  } catch (error) {
    res.send(`error - ${error.message}`);
  }
});

export default router;
