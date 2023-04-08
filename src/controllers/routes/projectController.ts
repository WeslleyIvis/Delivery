import express from 'express';
import authMiddleware from '../middlewares/auth';

interface AuthRequest extends Request {
    userId?: string;
}

const router = express.Router();

router.use(authMiddleware);

router.get('/',async (req, res) => {
    res.send({ok: true, user: (req as any).userId});
});

export default router