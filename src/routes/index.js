import express from 'express';
import userRoutes from './userRoute';
import contactRoutes from './contactRoute.js';
import groupRoutes from './groupRoute.js';

const router = express.Router();

userRoutes(router);
groupRoutes(router);
contactRoutes(router);

export default router;
