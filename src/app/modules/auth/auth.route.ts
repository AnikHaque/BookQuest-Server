import express from 'express';
import { UserController } from '../user/user.controller';

const router = express.Router();

// create user
router.post(
  '/signup',
  UserController.createUser
);

router.get('/login/:id', UserController.getSingleUser);

export const AuthRoutes = router;
