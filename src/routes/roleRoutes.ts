import express from 'express';
import { createRole, getUserRoles, updateUserRoles } from '../controllers/roleController';
import { protect, admin } from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/')
  .post(protect, admin, createRole); // Only admin can create new roles

router.route('/:id')
  .get(protect, admin, getUserRoles)   // Get roles of a specific user
  .put(protect, admin, updateUserRoles); // Update roles for a specific user

export default router;
