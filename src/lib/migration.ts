import { migrate } from 'drizzle-orm/bun-sqlite/migrator';
import { db } from './server/db';

// This will run migrations on the database, skipping the ones already applied
await migrate(db, { migrationsFolder: './drizzle' });
