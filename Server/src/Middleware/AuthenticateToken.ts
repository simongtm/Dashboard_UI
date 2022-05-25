import { Request, Response, NextFunction } from "express";
import { Enums, STATUS_CODES } from "../Shared/Enums";
import { UNAUTHORIZED } from "../Shared/ErrorMessages";
import { getToken } from "./DecodeToken";
export const AuthenticateToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const basicToken = getToken(request);
  if (!basicToken) {
    response.status(STATUS_CODES.UNAUTHORIZED).json({
      errorMessage: UNAUTHORIZED,
    });
  } else {
    next();
  }
};
