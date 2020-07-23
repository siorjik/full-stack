import AuthService from '../../server/services/authService';
import { checkSession } from '../../server/controllers/sessionController';

const authService = new AuthService();

export default async (req: any, res: any, callback: (dataObj?: any) => {}) => {
  const data = authService.parseAuthToken(req.headers);

  if (data) {
    const { login, password } = data;

    const callbackData = { login, password };

    if (await checkSession(login, password)) callback({ ...callbackData });
    else res.status(404).send('Sorry, you do not have a session...');
  } else res.status(403).send('You are not authorized');
};
