import { NextFunction, Request, Response } from 'express';
import { logger } from '../logger';
import { knownErrors } from './error-mapping';
import { STATUS_CODE } from './status-code';


export const ErrorHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {

    const errorInfo = knownErrors[error.name] || { status: STATUS_CODE.INTERNAL_ERROR, logLevel: 'error' };
    const { status, logLevel } = errorInfo;
    const message = error.message || 'Internal Server Error';

    logger[logLevel]({
        message: error.message,
        stack: error.stack,
        route: req.path,
        method: req.method,
        ip: req.ip,
        status,
    });

    res.status(status).json({
        status,
        message,
    });
};

export const HandleUnCaughtException = async (error: Error) => {
    logger.error({
        message: error.message,
        stack: error.stack,
    });
    process.exit(1);
};