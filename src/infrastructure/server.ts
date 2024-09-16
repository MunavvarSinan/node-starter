import cors from "cors";
import express, { Express, RequestHandler } from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import {
    logger,
    NodeErrors
} from "@infrastructure/adapters";
import maintenance from "@presentation/middlewares/maintanance";
import setupSwagger from "./adapters/swagger/swagger.setup";
import { limiter } from "@presentation/middlewares/rate-limiter";
import { routes } from "@presentation/http/routes";


export class Server {
    private app: Express;
    private server: any;
    private PORT = Number(process.env.PORT) || 8001


    constructor() {
        this.app = express()
    }

    private configureServer(): void {
        dotenv.config()
        this.app.use(express.json());
        this.app.use(cors({ origin: "*", credentials: true }))
        this.app.options('*', cors() as RequestHandler)
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(limiter)
        setupSwagger(this.app)
    }

    private errorHandler(): void {
        this.app.use(NodeErrors.ErrorHandler)

        process.on('uncaughtException', NodeErrors.HandleUnCaughtException);
        process.on('unhandledRejection', (reason: any) => {
            throw reason;
        });
    }

    private setupRoutes() {

        this.app.get('/health', (_req, res) => {
            res.status(200).json({ status: 'OK' })
        })


        if (process.env.NODE_ENV === 'test') {
            maintenance(this.app)
        } else {
            this.app.use('/api', routes)
        }


    }

    private startListening(): void {
        this.server = this.app.listen(this.PORT, '0.0.0.0', () => {
            logger.info(`🚀 API listening at http://localhost:${(this.server.address() as AddressInfo).port}`)
        }).on('error', (err) => {
            console.log(err);
            process.exit();
        })
    }

    public async start(): Promise<void> {
        this.configureServer();
        this.setupRoutes();
        this.errorHandler();

        try {
            this.startListening();
        } catch (error) {
            logger.error(`Error initializing server or  RabbitMQ: ${error}`);
            process.exit(1);
        }
    }

    public async stop(): Promise<void> {
        if (this.server) {
            await new Promise<void>((resolve) => {
                this.server.close(() => {
                    resolve();
                });
            });
        }
    }
}