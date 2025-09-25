import { experimental_SmartCoercionPlugin as SmartCoercionPlugin } from '@orpc/json-schema';
import { OpenAPIHandler } from '@orpc/openapi/node';
import { OpenAPIReferencePlugin } from '@orpc/openapi/plugins';
import { onError } from '@orpc/server';
import { RPCHandler } from '@orpc/server/node';
import { CORSPlugin } from '@orpc/server/plugins';
import { ZodToJsonSchemaConverter } from '@orpc/zod/zod4';
import type { NextFunction, Request, Response } from 'express';
import config from '../config';
import logger from '../logger';
import router from './router';

type HandlerArgs = {
  prefix?: `/${string}`;
  context: any;
};

type HandlerResponse = {
  matched: boolean;
  response?: any;
};

type Handler = {
  handle: (
    req: Request,
    res: Response,
    args: HandlerArgs
  ) => Promise<HandlerResponse>;
};

const handlerWrapper = (prefix: `/${string}` | undefined, handler: Handler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const args = {
      prefix,
      context: {},
    };
    const { matched, response } = await handler.handle(req, res, args);

    if (matched) {
      if (response) {
        logger.debug('response', { response });
        res.json(response);
      }
      return;
    }

    next();
  };
};

const rpcHandlerObject = new RPCHandler(router);
export const rpcHandler = handlerWrapper('/rpc', rpcHandlerObject);

// OpenApi
const openApiHandlerObject = new OpenAPIHandler(router, {
  plugins: [
    ...(config.cors
      ? [
          new CORSPlugin({
            origin: config.cors.origin,
            allowMethods: config.cors.methods,
            allowHeaders: config.cors.headers,
            credentials: config.cors.credentials,
          }),
        ]
      : []),
    new SmartCoercionPlugin({
      schemaConverters: [
        new ZodToJsonSchemaConverter(),
        // Add other schema converters as needed
      ],
    }),
    new OpenAPIReferencePlugin({
      docsProvider: 'swagger', // default: 'scalar'
      schemaConverters: [new ZodToJsonSchemaConverter()],
      specGenerateOptions: {
        info: {
          title: 'ORPC Playground',
          version: '1.0.0',
        },
      },
    }),
  ],
  interceptors: [onError((error) => console.error(error))],
});

export const openApiHandler = handlerWrapper('/api', openApiHandlerObject);
