import { Request } from "express";

export const getUserNameAndPassword = (token: string) => {
  const credentials = Buffer.from(token, "base64").toString("ascii");
  const userData = credentials?.split(":");
  if (userData && userData.length) {
    return { emailId: userData[0], password: userData[1] };
  }
  return { emailId: "", password: "" };
};
export const getToken = (request: Request) => {
  const token: Array<string> =
    request?.headers?.authorization?.split(" ") || [];
  return token.length > 0 ? token[1] : "";
};
