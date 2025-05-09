import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

import { Pool } from "pg";

const client = new Pool({
	connectionString: process.env.DATABASE_URL,
});

export const db = drizzle({
	client,
	schema,
	casing: "snake_case",
});
