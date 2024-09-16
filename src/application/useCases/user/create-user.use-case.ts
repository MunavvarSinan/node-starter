import { UserService } from "@application/services/user.service";
import { IUseCase } from "@common/types/IUseCase";
import { User } from "@domain/entities/user.entity";
import { NodeErrors } from "@infrastructure/adapters";
import { TYPES } from "@infrastructure/adapters/inversify/inversify.types";
import { inject, injectable } from "inversify";

@injectable()
export class CreateUserUseCase implements IUseCase<Omit<User, 'id'>, User> {
    constructor(
        @inject(TYPES.UserService) private readonly userService: UserService
    ) { }

    /**
     * @description Executes the use case to create a new user.
     * If a user with the same ID already exists, it throws an AlreadyExists error.
     * @param {User} data - The authentication data needed to create a new user.
     * @returns {Promise<User>} - The newly created user.
     * @throws {UserErrors.AlreadyExists} If a user with the same ID already exists.
     * @throws {UserErrors.ServerError} If there's a server error while creating the user.
     */

    async execute(data: Omit<User, 'id'>): Promise<User> {
        try {
            return await this.userService.createUser(data.name, data.email, data.age as number)
        } catch (error) {
            if (error instanceof NodeErrors.UserErrors.AlreadyExists) {
                throw error;
            }
            console.log(error);
            throw new NodeErrors.UserErrors.ServerError(`Unable to create user : ${(error as Error).message}`);
        }
    }
}