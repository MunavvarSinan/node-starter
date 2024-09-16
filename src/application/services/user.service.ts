import { injectable, inject } from 'inversify';
import { User } from '@domain/entities/user.entity';
import { TYPES } from '@infrastructure/adapters/inversify/inversify.types';
import { UserRepository } from '@infrastructure/database/repositories/user.repo';

@injectable()
export class UserService {
    constructor(
        @inject(TYPES.UserRepository) private userRepository: UserRepository
    ) { }

    async createUser(name: string, email: string, age?: number): Promise<User> {
        return await this.userRepository.create({ name, email, age });
    }

    async getUser(id: number): Promise<User | null> {
        return await this.userRepository.findById(id);
    }

    async updateUser(id: number, userData: Partial<User>): Promise<User> {
        return await this.userRepository.update(id, userData);
    }
}