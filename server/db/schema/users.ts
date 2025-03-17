import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import crypto from "node:crypto";

const roles = pgEnum("role", ["user", "admin"]);

export const users = pgTable("users", {
	id: text("id")
		.primaryKey()
		.notNull()
		.$defaultFn(() => crypto.randomUUID()),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	hashedPassword: text("hashed_password").notNull(),
	role: roles("role"),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").$onUpdateFn(() => new Date()),
});
