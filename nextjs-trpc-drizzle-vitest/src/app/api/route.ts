import { inc } from "@/server/cache";

export async function GET() {
  const value = await inc("test-counter");

  return Response.json({
    status: "ok",
    date: new Date().toISOString(),
    cacheCount: value,
  });
}
