import express from 'express';
import { loginEndpoint, registerEndpoint } from './controllers';

const router = express.Router();

/**
 *
 */
router.post('/register', registerEndpoint);
router.post('/login', loginEndpoint);

export default router;