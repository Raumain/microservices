import { Elysia } from "elysia";

const app = new Elysia()
	.get("/", () => {
		return "Hello Vercel!";
	})
	.get("/api/hello", () => {
		return { message: "API is working on Vercel" };
	});

// Explicit handler for Vercel
export const handler = async (req: Request) => {
	return await app.handle(req);
};

// For local development
export default app;