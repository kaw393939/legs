import { describe, it, expect } from "vitest";

describe("Basic Tests", () => {
  it("should pass a basic test", () => {
    expect(1 + 1).toBe(2);
  });

  it("should have proper environment", () => {
    expect(typeof window).toBe("object");
  });
});
