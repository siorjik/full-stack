import { Router } from 'express';

import { userCreate, userUpdate, userDelete, getUser, getUsers } from '../controllers/userController';
import auth from '../../utils/helpers/auth';

const router: Router = Router();

router.post('/user', auth, async(req: any, res: any) => {
  const { data } = req.body;

  try {
    const result = await userCreate(data);
    res.send(result);
  } catch (error) {
    res.send(`error - ${error.message}`);
  }
});

router.put('/user/:id', auth, async(req: any, res: any) => {
  const { id } = req.params;
  const { data } = req.body;

  try {
    const result = await userUpdate(id, data);
    res.send(result);
  } catch (error) {
    res.send(`error - ${error.message}`);
  }
});

router.delete('/user/:id', auth, async(req: any, res: any) => {
  const { id } = req.params;

  try {
    await userDelete(id);
    res.send(true);
  } catch (error) {
    res.send(`error - ${error.message}`);
  }
});

router.get('/user/:id', auth, async(req: any, res: any) => {
  const { id } = req.params;
    
  try {
    const user = await getUser(id);
    res.send({ user });
  } catch (error) {
    res.send(`error - ${error}`);
  }
});

router.get('/user', auth, async(req: any, res: any) => {
  try {
    const users = await getUsers();
    res.send({ users });
  } catch (error) {
    res.send(`error - ${error}`);
  }
});

export default router;
