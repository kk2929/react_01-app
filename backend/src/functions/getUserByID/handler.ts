import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

require("dotenv").config();

const mysql2 = require('mysql2/promise');

const dbSetting = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  charset: 'utf8',
  multipleStatements: true,	//一度に複数のクエリを実行できる
  port: process.env.DB_PORT,
};

const getUserByID: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  let connection
  try {
    connection = await mysql2.createConnection(dbSetting);
    let sql = `
		  select t1.*
		  from user as t1
      where t1.id = ?
		  ;`
    let params = [event.body.id]
    let [rows, fields] = await connection.query(sql, params);

    return formatJSONResponse({
      rows,
    });
  }
  catch (error) {
    console.error(error);
    throw error;
  }
  finally {
    if (connection) connection.end();
  }
};

export const main = middyfy(getUserByID);
