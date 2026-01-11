import { describe, expect, it } from "vitest";
import { inc } from "@/server/cache";

describe("Cache Integration", () => {
  it("should increment the test counter", async () => {
    const initialResult = await inc("test-counter");
    expect(typeof initialResult).toBe("number");

    const secondResult = await inc("test-counter");
    expect(secondResult).toBeGreaterThan(initialResult);
    expect(secondResult).toBe(initialResult + 1);
  });
});
