import { Request, Response } from 'express';
import User from '../models/userModels';

// Get all users
export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find({});
  res.json(users);
};

// Update user roles
export const updateUserRoles = async (req: Request, res: Response) => {
  const { roles, permissions } = req.body;
  const user = await User.findById(req.params.id);

  if (user) {
    user.roles = roles;
    user.permissions = permissions;
    await user.save();
    res.json({ message: 'User roles updated' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
