import 'reflect-metadata';
import 'module-alias/register';
import '@infrastructure/adapters/inversify'

import { Server } from '@infrastructure/server';
import { logger } from '@infrastructure/adapters';

class App {
    private _server: Server;

    constructor() {

        this._server = new Server();
    }

    public async start(): Promise<void> {
        try {
            process.on('uncaughtException', (error) => {
                // Sentry.captureException(error)
                logger.error('server: uncaught exception', error)
            })
            process.on('unhandledRejection', (reason, promise) => {
                // Sentry.captureException(reason)
                logger.error(`server: unhandled promise rejection: ${promise}: ${reason}`)
            })
            await this._server.start();
        } catch (error) {
            logger.error(error);
            process.exit(1);
        }
    }
}

new App().start();