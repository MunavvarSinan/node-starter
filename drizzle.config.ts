import { defineConfig } from "drizzle-kit";
import { config } from "./src/common/config";

export default defineConfig({
    schema: "./src/infrastructure/database/schema/**/*.ts",
    out: "./src/infrastructure/database/migration",
    dialect: "postgresql",
    dbCredentials: {
        url: config.DATABASE_URL as string,
    },
    verbose: true,
    strict: true,
});