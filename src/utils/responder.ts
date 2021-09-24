import { Request, Response } from "express";
import _ from "lodash";
import { errors, ResponseBody, ResponseCode } from "../types/responseCode";

const responder = {
  send: (req: Request, res: Response, data: any) => {
    return res.json({ status: "success", data, httpCode: 200 } as ResponseBody);
  },
  error: (errorCode: ResponseCode, req: Request, res: Response) => {
    const locale = req.headers['accept-language'] || 'en-US';
  
    if (errorCode && errors[errorCode]) {
      const status = errors[errorCode].status;
      const error = _.get(errors[errorCode].error, locale);
      const httpCode = errors[errorCode].httpCode;
      return res.status(httpCode).json({ error, status, httpCode } as ResponseBody);
    }
  }
};

export default responder;