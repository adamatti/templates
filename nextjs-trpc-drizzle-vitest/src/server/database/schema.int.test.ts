import { describe, expect, it } from "vitest";
import { db } from "@/server/database";
import { todosTable } from "@/server/database/schema";

describe("Database Schema Integration", () => {
  it("should list todos", async () => {
    const result = await db.select().from(todosTable);
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
  });
});
