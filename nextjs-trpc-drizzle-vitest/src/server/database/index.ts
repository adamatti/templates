import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import type { Logger } from "drizzle-orm/logger";

import { logger } from "../logger";
import * as schema from "./schema";

const sqlite = new Database("sqlite.db");
logger.info("Initializing database connection");

class DrizzlePinoLogger implements Logger {
  logQuery(query: string, params: unknown[]): void {
    logger.info({ query, params }, "database query");
  }
}

export const db = drizzle(sqlite, {
  schema,
  logger: new DrizzlePinoLogger(),
});
