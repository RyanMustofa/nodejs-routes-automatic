import express from "express";
import Public from './routes/public';
import admin from './routes/admin';

const router = express();

router.use('/', Public)
router.use('/admin', admin)

export default router