import { Router } from "express";
import { UserController } from "../controllers";
import { container } from "@infrastructure/adapters/inversify";
import { TYPES } from "@infrastructure/adapters/inversify/inversify.types";

export class UserRoutes {
    router: Router;

    private controller: UserController;
    constructor(

    ) {
        this.router = Router();
        this.controller = container.get<UserController>(TYPES.UserController);

    }

    routes(): Router {
        this.router.post('/create', this.controller.create.bind(this.controller));
        return this.router;
    }
}
