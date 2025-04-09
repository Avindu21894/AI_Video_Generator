import { boolean, serial, varchar } from "drizzle-orm/pg-core"; // Import from pg-core for PostgreSQL
import { pgTable } from "drizzle-orm/pg-core";

export const Users = pgTable('Users', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    email: varchar('email').notNull(),
    imageUrl: varchar('imageUrl'),
    subscription: boolean('subscription').default(false)
});
