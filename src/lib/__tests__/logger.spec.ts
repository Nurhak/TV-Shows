import { describe, it, expect, vi, afterEach } from "vitest";
import logger, { LogType } from "../logger";

describe("Logger", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should log messages", () => {
    logger.log("Hello World");
    expect(logger.count).toBe(1);
  });

  it("should log messages with type", () => {
    logger.log("Hello World", LogType.INFO);
    expect(logger.count).toBe(2);
  });

  it("log cache should not exceed limit", () => {
    for (let i = 0; i < logger.logArraySizeLimit + 1; i++) {
      logger.log(`Hello World ${i}`);
    }
    expect(logger.count).toBe(logger.logArraySizeLimit);
  });

  it('should call console.error when type is "error"', () => {
    vi.spyOn(console, "error");
    logger.log("Hello World", LogType.ERROR);
    expect(console.error).toHaveBeenCalled();
  });
});
