import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  console.log(event.body);
  console.log(event.body.name);
  console.log(typeof event.body);

  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    // message: `Hello, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(hello);
