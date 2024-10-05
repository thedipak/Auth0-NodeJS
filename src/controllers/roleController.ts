import { Request, Response } from 'express';
import User from '../models/userModels';

// Get user roles
export const getUserRoles = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json({ roles: user.roles });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update user roles
export const updateUserRoles = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.roles = req.body.roles || user.roles;
      await user.save();
      res.json({ message: 'Roles updated', roles: user.roles });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create new roles (Admin only)
export const createRole = async (req: Request, res: Response) => {
  // Custom logic for adding new roles (depending on the role management system)
  const { role } = req.body;
  if (role) {
    res.status(201).json({ message: `Role ${role} created` });
  } else {
    res.status(400).json({ message: 'Invalid role data' });
  }
};
