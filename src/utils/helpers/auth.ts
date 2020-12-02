import AuthService from '../../server/services/authService';
import { checkSession } from '../../server/controllers/sessionController';

const authService = new AuthService();

export default async (req: any, res: any, next: any) => {
  const { data } = req.body;
  const result = await authService.parseAuthToken(req.headers);

  if (data && Object.keys(data).length && !result) {
    req.userData = { ...data, isAuth: false };
    next();
  } else if (result) {
    if (await checkSession(result.login, result.password)) {
      req.userData = { ...result, isAuth: true };
      next();
    } else res.status(403).send('Sorry, you do not have a session...');
  } else res.status(401).send('You are not authorized');
};
