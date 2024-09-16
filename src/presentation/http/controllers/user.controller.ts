import { UserUseCases } from '@application/useCases';
import { TYPES } from '@infrastructure/adapters/inversify/inversify.types';
import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';

@injectable()
export class UserController {
    constructor(
        @inject(TYPES.UserUseCases) private user: UserUseCases,
    ) { }

    async create(req: Request, res: Response) {
        try {
            const user = await this.user.createUser.execute(req.body);
            res.status(201).json(user);
        } catch (error: Error | any) {
            res.status(400).json({ error: error.message });
        }
    }

    // async get(req: Request, res: Response) {
    //     try {
    //         const id = parseInt(req.params.id);
    //         const user = await this.userService.getUser(id);
    //         if (user) {
    //             res.json(user);
    //         } else {
    //             res.status(404).json({ error: 'User not found' });
    //         }
    //     } catch (error: Error | any) {
    //         res.status(400).json({ error: error.message });
    //     }
    // }

    // async update(req: Request, res: Response) {
    //     try {
    //         const id = parseInt(req.params.id);
    //         const userData = req.body;
    //         const user = await this.userService.updateUser(id, userData);
    //         res.json(user);
    //     } catch (error: Error | any) {
    //         res.status(400).json({ error: error.message });
    //     }
    // }
}