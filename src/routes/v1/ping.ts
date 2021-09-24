import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  // return responder.error(401, req, res);
  return res.status(500).send('erro');
});

export default router;