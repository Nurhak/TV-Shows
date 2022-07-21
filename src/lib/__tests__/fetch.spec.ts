import { describe, it, expect, afterAll, beforeAll } from "vitest";
import { getReq } from "../fetch";
import { setupServer } from "msw/node";
import { handlers } from "@/mocks/handlers";

const server = setupServer(...handlers);

describe("fetch", () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it("should return a promise", () => {
    expect(getReq("/")).toBeInstanceOf(Promise);
  });

  it("should fetch data", async () => {
    expect(await getReq("/")).toEqual({ message: "Hello World" });
  });
});
