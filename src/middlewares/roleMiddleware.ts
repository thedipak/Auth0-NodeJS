import { Request, Response, NextFunction } from 'express';

interface AuthRequest extends Request {
  user?: any;
}

export const checkRole = (requiredRole: string) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (req.user && req.user.roles.includes(requiredRole)) {
      next();
    } else {
      res.status(403).json({ message: 'Not authorized for this role' });
    }
  };
};

export const checkPermission = (requiredPermission: string) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (req.user && req.user.permissions.includes(requiredPermission)) {
      next();
    } else {
      res.status(403).json({ message: 'Not authorized for this permission' });
    }
  };
};
