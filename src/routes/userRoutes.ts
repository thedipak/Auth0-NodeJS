import express from 'express';
import { getUsers, updateUserRoles } from '../controllers/userController';
import { protect, admin } from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/')
  .get(protect, admin, getUsers);

router.route('/:id/roles')
  .put(protect, admin, updateUserRoles);

export default router;
