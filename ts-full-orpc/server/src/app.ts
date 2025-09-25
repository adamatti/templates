import cors from 'cors';
import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import config from './config';
import logger from './logger';
import { openApiHandler, rpcHandler } from './orpc/http-handler';

export const app = express();

if (config.cors) {
  app.use(
    cors({
      origin: config.cors.origin,
      methods: config.cors.methods,
      allowedHeaders: config.cors.headers,
      credentials: config.cors.credentials,
    })
  );
}

// log middleware
app.use((req: Request, _res: Response, next: NextFunction) => {
  logger.debug('request', { url: req.url, method: req.method });
  next();
});

// rpc things
app.use(/\/rpc(.*)/, rpcHandler);
app.use(/\/api(.*)/, openApiHandler);

// root
app.get('/', (_req, res) => {
  res.json({ message: 'Hello World' });
});
