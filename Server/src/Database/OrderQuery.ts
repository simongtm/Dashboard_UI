import { NextFunction } from "express";
import { asyncQuery } from "./QueryHandler";

export const getOrderData = async (
  limit: number,
  page: number,
  next: NextFunction
) => {
  const offset = (page - 1) * limit;

  const paginationQuery = `select * from OrderDetails limit ${limit} OFFSET ${offset}`;

  return await asyncQuery(paginationQuery, next);
};
