import { Pool } from "pg";
import { config } from "./src/common/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./src/common/config/db";

async function runMigration() {
    try {
        await migrate(db, { migrationsFolder: "./src/infrastructure/database/migration" });
    } catch (err) {
        console.log("migration error", err);
    }
}

runMigration();