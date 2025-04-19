import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "postgresql",
	schema: "./server/db/schema/index.ts",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
	casing: "snake_case",
});
