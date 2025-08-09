import { describe, it, expect, vi } from "vitest";
import { helloGithub } from "./index";

describe("helloGithub", () => {
  it("包含姓名与 hello github", () => {
    const result = helloGithub("Spencer");
    expect(result).toMatch(/^Spencer says at .*: hello github$/);
  });

  it("使用 ISO 时间戳", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2020-01-01T00:00:00.000Z"));
    const result = helloGithub("Test");
    expect(result).toBe(
      "Test says at 2020-01-01T00:00:00.000Z: hello github"
    );
    vi.useRealTimers();
  });
});


