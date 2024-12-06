import { node } from "@elysiajs/node";
import { Elysia } from "elysia";

const app = new Elysia({ adapter: node() })
	.get("/", () => "OK")
	.get("/api/hello", () => ({ message: "Hello" }));
export const handler = (req: Request) => app.handle(req);
export default app;
