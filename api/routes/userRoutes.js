import Express from 'express'
import { test } from '../controllers/userController';

const router=Express.Router();


router.get('/',test)

export default router;