import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";

const db = new PrismaClient({
    log: ["query", "info", "warn", "error"],

});

export default db;

export const genId = () => nanoid(16);
