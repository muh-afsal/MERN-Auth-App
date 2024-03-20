import Express from 'express'
import { test } from '../controllers/userController.js';

const router=Express.Router();


router.get('/',test)

export default router;