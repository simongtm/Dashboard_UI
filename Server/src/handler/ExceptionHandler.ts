import { Response} from "express";
import { Enums } from "../Shared/Enums";


export default class ErrorHandler extends Error {
    public statusCode:number;
    public message: string;
    constructor(statusCode: number, message:string) {
      super();
      this.statusCode = statusCode;
      this.message = message;
    }
  }
 export const handleError=(err:any,response:Response)  =>{
    const { statusCode, message } = err;
    response.status(statusCode).json({
      status: Enums.ERROR,
      statusCode,
      message
    });
 }

 export const ErrorCallback=(err:any)=>{
  if(err) {return new ErrorHandler(500,err)};
  }
