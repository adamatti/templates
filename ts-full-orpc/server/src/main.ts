import { app } from './app';
import config from './config';
import logger from './logger';

process.on('uncaughtException', (error: Error) => {
  logger.error('Uncaught exception', { error });
});

process.on(
  'unhandledRejection',
  (reason: unknown, promise: Promise<unknown>) => {
    logger.error('Unhandled promise rejection', { reason, promise });
  }
);

app.listen(config.port, () => {
  logger.info('Server is running', { port: config.port });
});
