import { User } from "@domain/entities/user.entity";

export interface IUserRepository {
    findById(id: number): Promise<User | null>;
    create(user: Omit<User, 'id'>): Promise<User>;
    update(id: number, user: Partial<User>): Promise<User>;
}