import { createClient, type RedisClientType } from "redis";

const REDIS_URL = process.env.REDIS_URL ?? "redis://localhost:6379";

let client: RedisClientType | null = null;
let connecting: Promise<void> | null = null;

async function getClient(): Promise<RedisClientType> {
  if (client) return client;
  client = createClient({ url: REDIS_URL });
  client.on("error", (err) => {
    // keep minimal logging server-side
    // eslint-disable-next-line no-console
    console.error("Redis Client Error", err);
  });
  connecting = client.connect().then(() => {
    connecting = null;
  });
  await connecting;
  return client;
}

export async function get(key: string): Promise<string | null> {
  const c = await getClient();
  return c.get(key);
}

export async function set(
  key: string,
  value: string,
  ttlSeconds?: number,
): Promise<void> {
  const c = await getClient();
  if (typeof ttlSeconds === "number") {
    await c.setEx(key, ttlSeconds, value);
  } else {
    await c.set(key, value);
  }
}

export async function inc(key: string, by = 1): Promise<number> {
  const c = await getClient();
  return c.incrBy(key, by);
}

export async function del(key: string): Promise<number> {
  const c = await getClient();
  return c.del(key);
}

export const cache = async <R>(
  key: string,
  func: () => Promise<R>,
  options?: { ttlSeconds: number },
): Promise<R> => {
  const c = await getClient();
  const value = await c.get(key);
  if (value) {
    return JSON.parse(value) as R;
  }
  const result = await func();
  if (options?.ttlSeconds) {
    await c.setEx(key, options.ttlSeconds, JSON.stringify(result));
  } else {
    await c.set(key, JSON.stringify(result));
  }
  return result;
};

export default { get, set, inc, del, cache };
