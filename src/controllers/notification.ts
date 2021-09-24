import { Request, Response } from "express";
import service from "../services/notification";
import responder from "../utils/responder";

const NotificationController = {
  list: async (req: Request, res: Response) => {
    try {
      const response = await service.list();
      return responder.send(req, res, response);
    } catch (error) {
      return responder.error(401, req, res);
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      if (!req.body) throw Error('É obrigatório enviar os dados da notificação');
      const response = await service.create(req.body);
      return responder.send(req, res, response);
    } catch (error) {
      return responder.error(401, req, res);
    }
  },
}

export default NotificationController;