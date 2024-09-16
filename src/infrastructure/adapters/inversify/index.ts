import { Container } from "inversify";
import { TYPES } from "./inversify.types";
import { IUserRepository } from "@domain/interfaces/user.interface";
import { UserRepository } from "@infrastructure/database/repositories/user.repo";
import { UserService } from "@application/services";
import { UserController } from "@presentation/http/controllers";
import { IUseCase } from "@common/types/IUseCase";
import { User } from "@domain/entities/user.entity";
import { UserUseCases } from "@application/useCases";
import { CreateUserUseCase } from "@application/useCases/user/create-user.use-case";


const container = new Container();

container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository)
container.bind<UserService>(TYPES.UserService).to(UserService);
container.bind<UserController>(TYPES.UserController).to(UserController);
container.bind<UserUseCases>(TYPES.UserUseCases).to(UserUseCases);
// Use Cases

container.bind<IUseCase<Omit<User, 'id'>, User>>(TYPES.CreateUserUseCase).to(CreateUserUseCase);

export { container };
