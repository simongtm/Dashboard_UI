import { NextFunction } from "express";
import { asyncQuery } from "./QueryHandler";

export const createUserTable = async (next: NextFunction) => {
  const query = `CREATE TABLE IF NOT EXISTS UserDetails (
        UserId int AUTO_INCREMENT PRIMARY KEY,
        FirstName varchar(255),
        LastName varchar(255),
        EmailId varchar(255),
        Password varchar(255)
    )`;
  return asyncQuery(query, next);
};

export const createOrderTable = async (next: NextFunction) => {
  const query = `CREATE TABLE IF NOT EXISTS OrderDetails (
        OrderId int AUTO_INCREMENT PRIMARY KEY,
        Date varchar(255),
        Name varchar(255),
        Address varchar(255),
        ShipTo varchar(255),
        PaymentMethod varchar(255),
        Amount int
    )`;
  return asyncQuery(query, next);
};
export const insertData = async (next: NextFunction) => {
  for (let i = 0; i < 100; i++) {
    const query = `INSERT INTO OrderDetails (Date, Name, Address, ShipTo,PaymentMethod,Amount) values('${new Date(
      `${1921 + i + 1}-06-19`
    ).toDateString()}','${"Test" + (i + 1)}','${"USA Address " + (i + 1)}','${
      "New York " + (i + 1)
    }','${"VISA 3719" + (i + 1)}','${(i + 1) * 5}')`;
    await asyncQuery(query, next);
  }
};
export const createSchema = async (next: NextFunction) => {
  await createUserTable(next);
  await createOrderTable(next);
  await insertData(next);
};
