import { rest } from "msw";

const getPath = (path: string) => {
  return `${import.meta.env.VITE_API_BASE_URL}${path}`;
};

export const handlers = [
  rest.get(getPath("/"), (req, res, ctx) => {
    return res(ctx.json({ message: "Hello World" }));
  }),
];
