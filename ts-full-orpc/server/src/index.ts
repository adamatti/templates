import { app } from './app';
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

const PORT = Number(process.env.PORT ?? 3000);
app.listen(PORT, () => {
  logger.info('Server is running', { port: PORT });
});
