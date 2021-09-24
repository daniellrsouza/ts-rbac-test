import { Router } from "express";
import canAccess from "./../middlewares/permission";
import notification from "./v1/notification";
import ping from "./v1/ping";

const router = Router();

router.use('/v1/ping', ping);

router.use('/v1/notification', canAccess(['readAny'], 'notification'), notification);

export default router;