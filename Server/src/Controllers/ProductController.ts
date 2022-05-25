import { Router, Request, Response, NextFunction } from "express";
import { getOrderData } from "../Database/OrderQuery";
import { STATUS_CODES } from "../Shared/Enums";

export const productRouter = Router();

productRouter.get(
  "/getOrderDetails/:limit/:page",
  async (request: Request, response: Response, next: NextFunction) => {
    const limit: any = request.params?.limit;
    const page: any = request.params?.page;
    const orderData: any = await getOrderData(limit, page, next);
    if (orderData) {
      response.status(STATUS_CODES.SUCCESS).send(orderData);
    }
  }
);
