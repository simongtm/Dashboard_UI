import { Router, Request, Response, NextFunction } from "express";
import { deleteUser, getUserDetails, registerUserData } from "../Database/UserDataQuery";
import ErrorHandler from "../handler/ExceptionHandler";
import { getToken, getUserNameAndPassword } from "../Middleware/DecodeToken";
import { STATUS_CODES } from "../Shared/Enums";
import { NO_RECORD_FOUND, RECORD_EXISTS } from "../Shared/ErrorMessages";
export const userRouter = Router();

userRouter.get(
  "/user",
  async (request: Request, response: Response, next: NextFunction) => {
    const { emailId, password } = getUserNameAndPassword(getToken(request));
    const userDetail: any = await getUserDetails(emailId, password, next);
    if (userDetail && userDetail.length) {
      response.status(STATUS_CODES.SUCCESS).send(userDetail);
    } else {
      response.send(
        new ErrorHandler(STATUS_CODES.NOT_FOUND, NO_RECORD_FOUND)
      );
    }
  }
);
userRouter.delete(
  "/user",
  async (request: Request, response: Response, next: NextFunction) => {
    
    const userDetail: any = await deleteUser(next);
    if (userDetail && userDetail) {
      response.status(STATUS_CODES.SUCCESS).send(userDetail);
    } else {
      response.send(
        new ErrorHandler(STATUS_CODES.NOT_FOUND, NO_RECORD_FOUND)
      );
    }
  }
);
userRouter.post(
  "/user",
  async (request: Request, response: Response, next: NextFunction) => {
    const userDetails: any = await registerUserData(request.body, next);
    if (userDetails && userDetails?.affectedRows===1) {
      response.status(STATUS_CODES.SUCCESS).send(userDetails);
    } else {
      response.send(
        new ErrorHandler(STATUS_CODES.USER_ALREADY_EXISTS, RECORD_EXISTS)
      );
    }
  }
);
