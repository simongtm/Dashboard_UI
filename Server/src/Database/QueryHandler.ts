import { NextFunction } from "express";
import SqlConnection from "./DBConnectionManager";

const sqlInstance = SqlConnection.SqlClient;
export const asyncQuery = (query: string, next: NextFunction) => {
    return new Promise((resolve, reject) => {
      /* This statement automatically get the sql connection and release back to thread pool */
      sqlInstance.getConnection((err: any, connection: any) => {
        if (err) {
          reject(err);
        } else {
          connection.query(query, (err: any, result: any) => {
            connection.release();
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        }
      });
    });
  };