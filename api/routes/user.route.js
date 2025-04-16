import express from 'express';
import { test, upload, uploadProfileMiddleware } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);
router.post('/upload-profile', uploadProfileMiddleware, upload);

export default router;
