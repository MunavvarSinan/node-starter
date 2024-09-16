import { STATUS_CODE } from './status-code';

type LogLevel = 'error' | 'warn' | 'info' | 'debug';

export const knownErrors: Record<string, { status: number; logLevel: LogLevel }> = {
    'UserNotFoundError': { status: STATUS_CODE.NOT_FOUND, logLevel: 'warn' },
    'UserAlreadyExistsError': { status: STATUS_CODE.CONFLICT, logLevel: 'warn' },
    'UserServerError': { status: STATUS_CODE.INTERNAL_ERROR, logLevel: 'error' },
    'UserUnauthorizedError': { status: STATUS_CODE.UNAUTHORIZED, logLevel: 'warn' },
    'UserValidationError': { status: STATUS_CODE.UNPROCESSABLE_ENTITY, logLevel: 'warn' },
};