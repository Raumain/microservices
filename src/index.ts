import { Elysia } from "elysia";

const app = new Elysia()
	.get("/", () => {
		return "Hello Vercel!";
	})
	.get("/api/hello", () => {
		return { message: "API is working on Vercel" };
	});

// Vercel-specific export
export default app.handle;

// Local development
if (import.meta.main) {
	app.listen(3000);
}