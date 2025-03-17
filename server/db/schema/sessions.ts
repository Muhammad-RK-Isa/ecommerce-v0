import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";

export const sessions = pgTable("sessions", {
	token: text("token").notNull().primaryKey(),
	expiresAt: timestamp("expires_at", { withTimezone: true }),
	userId: text("user_id").references(() => users.id),
});
