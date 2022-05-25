import { NextFunction } from "express";
import { STATUS_CODES } from "../Shared/Enums";
import { asyncQuery } from "./QueryHandler";



export const getUserDetails = (
  emailId: string,
  password: string,
  next: NextFunction
) => {
  const query = `SELECT * FROM UserDetails where EmailId='${emailId?.toLowerCase()}' and Password='${password}'`;
  return asyncQuery(query, next);
};
export const deleteUser = (
  next: NextFunction
) => {
  const query = `DELETE FROM UserDetails`;
  return asyncQuery(query, next);
};
export const registerUserData = async (
  userData: any,
  next: NextFunction
) => {
  const { firstName, lastName, emailId, password } = userData;
  const isUserExist:any = await getUserDetails(emailId, password, next);
  if (!isUserExist?.length) {
    const query = `INSERT INTO UserDetails (FirstName, LastName, EmailId, Password) values('${firstName}','${lastName}','${emailId?.toLowerCase()}','${password}')`;
    return asyncQuery(query, next);
  }
  return STATUS_CODES.NOT_FOUND;
};
