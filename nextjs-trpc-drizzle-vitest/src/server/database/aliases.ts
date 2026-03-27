import { alias } from "drizzle-orm/sqlite-core";
import { todosTable } from "./schema";

export const todosAlias = alias(todosTable, "t");
