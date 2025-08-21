import jwt from 'jsonwebtoken';
import { Role } from '../domain/role';
import { Request, Response, NextFunction } from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                role: Role;
            }
        }
    }
}

const secretKey = process.env.SECRET_KEY || 'secretKey';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization')?.split(' ')[1] || '';
    if (!token) {
        res.status(400).json({ message: 'Token not found' });
        return
    }
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            res.status(400).json({ message: 'Invalid token' });
            return
        }
        const payload = decoded as { id: string; role: Role };
        req.user = payload;

        if (payload.role !== Role.ADMIN) {
            res.status(400).json({ message: 'Invalid role' });
            return
        }
    })
    next()
}
