import { NextFunction, Request, Response } from "express";
import accessControl from "../rbac";
import { EndpointAction, Resource } from "../types/permission";
import responder from "../utils/responder";

const rbac = (actions: EndpointAction[], resource: Resource) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const roles = ['user', 'admin'];
    
    const canAccess = roles.some(role => {
      return actions.some(action => {
        const result = accessControl.can(role)[action](resource);
        return result.granted;
      });
    })

    if (!canAccess) return responder.error(401, req, res);

    next();

  }
}

export default rbac;