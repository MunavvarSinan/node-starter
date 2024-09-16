import { injectable } from 'inversify';
import { User } from '@domain/entities/user.entity';
import { IUserRepository } from '@domain/interfaces/user.interface';
import { eq } from 'drizzle-orm';
import { db } from '@common/config/db';
import { users } from '../schema/user.schema';

@injectable()
export class UserRepository implements IUserRepository {
    async findById(id: number): Promise<User | null> {
        const result = await db.select().from(users).where(eq(users.id, id));
        return result[0] ? new User(result[0].id, result[0].name, result[0].email, result[0].age) : null;
    }

    async create(user: Omit<User, 'id'>): Promise<User> {
        const result = await db.insert(users).values(user).returning();
        console.log(result)
        return new User(result[0].id, result[0].name, result[0].email, result[0].age);
    }

    async update(id: number, user: Partial<User>): Promise<User> {
        const result = await db.update(users).set(user).where(eq(users.id, id)).returning();
        return new User(result[0].id, result[0].name, result[0].email, result[0].age);
    }
}