import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const todosTable = sqliteTable("todos", {
  id: int("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  createdAt: int("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: int("updated_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
});
