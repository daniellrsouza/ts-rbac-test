import { Router } from "express";
import controller from '../../controllers/notification';

const router = Router();

router.get('/', controller.list);
router.post('/', controller.create);

export default router;