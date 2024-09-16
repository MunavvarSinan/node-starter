import { TYPES } from "@infrastructure/adapters/inversify/inversify.types";
import { CreateUserUseCase } from "./create-user.use-case";
import { inject, injectable } from "inversify";

@injectable()
export class UserUseCases {
    constructor(
        @inject(TYPES.CreateUserUseCase) public readonly createUser: CreateUserUseCase,

    ) { }
}
