import { Router } from 'express';

import { userCreate, userUpdate, userDelete, getUser, getUsers } from '../controllers/userController';
import getResponse from '../../utils/helpers/getResponse';

const router: Router = Router();

router.post('/user', async(req: any, res: any, next: any) => {
  const { data } = req.body;

  try {
    getResponse(req, res, async () => {
      const result = await userCreate(data);
      res.send(result);
    });
  } catch (error) {
    res.send(`error - ${error.message}`);
  }
});

router.put('/user/:id', async(req: any, res: any, next: any) => {
  const { id } = req.params;
  const { data } = req.body;

  try {
    getResponse(req, res, async () => {
      const result = await userUpdate(id, data);
      res.send(result);
    });
  } catch (error) {
    res.send(`error - ${error.message}`);
  }
});

router.delete('/user/:id', async(req: any, res: any, next: any) => {
  const { id } = req.params;

  try {
    getResponse(req, res, async () => {
      await userDelete(id);
      res.send(true);
    });
  } catch (error) {
    res.send(`error - ${error.message}`);
  }
});

router.get('/user/:id', (req: any, res: any, next: any) => {
  const { id } = req.params;
    
  try {
    getResponse(req, res, async () => {
      const user = await getUser(id);
      res.send({ user });
    });
  } catch (error) {
    res.send(`error - ${error}`);
  }
});

router.get('/user', async(req: any, res: any, next: any) => {
  try {
    getResponse(req, res, async () => {  
      const users = await getUsers();
      res.send({ users });
    });
  } catch (error) {
    res.send(`error - ${error}`);
  }
});

export default router;
