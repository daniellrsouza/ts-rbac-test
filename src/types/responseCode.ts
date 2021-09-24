import { StatusCodes } from "http-status-codes";

export type Locales = 'en-US' | 'pt-BR';

export type ResponseStatus = 'error' | 'warning' | 'success';

export type ResponseCode = 401 | 3029;

export type ResponseLocale = Partial<Record<Locales, string>>;

export type ResponseMessage = {
  message: ResponseLocale;
}

export type ResponseError = {
  [key: string]: any;
}

export type ResponseData = {
  [key: string]: any;
}

export type ResponseBody = {
  status: ResponseStatus;
  data?: ResponseData;
  error?: ResponseError;
  httpCode: StatusCodes;
}

export type ErrorResponse = Record<ResponseCode, ResponseBody>;

export const errors: ErrorResponse = {
  401: {
    error: {
      'en-US': 'You are not allowed in here :(',
      'pt-BR': 'Você não está autorizado aqui :('
    },
    status: 'warning',
    httpCode: StatusCodes.UNAUTHORIZED,
  },
  3029: {
    error: {
      'en-US': 'The provided token is expired. Please, log in to LoadShark again.',
      'pt-BR': 'O token enviado expirou. Por favor, faça o login no LoadShark novamente.'   
    },
    status: 'error',
    httpCode: StatusCodes.NETWORK_AUTHENTICATION_REQUIRED,
  },
};