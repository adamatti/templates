import pino from "pino";

export const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  base: undefined, // disable default fields (e.g. pid, hostname)
  transport:
    process.env.NODE_ENV === "development"
      ? {
          target: "pino-pretty",
          options: {
            colorize: true,
          },
        }
      : undefined,
});
