import { db } from "@/server/database";
import { todosAlias } from "@/server/database/aliases";

export async function GET() {
  const allTodos = await db.select().from(todosAlias).orderBy(todosAlias.id);
  return Response.json(allTodos);
}
