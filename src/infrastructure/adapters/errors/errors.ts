import { STATUS_CODE } from './status-code';

/**
 * @class BaseError
 * @extends Error
 * @description The base class for all custom errors in the application. It captures the error message, HTTP status code, and stack trace.
 */
class BaseError extends Error {
    public readonly status: number;

    /**
     * @constructor
     * @param {string} name - The name of the error class.
     * @param {number} status - The HTTP status code associated with the error.
     * @param {string} description - A human-readable description of the error.
     */
    constructor(name: string, status: number, description: string) {
        super(description);
        this.name = name;
        this.status = status;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this);
    }
}

/**
 * @description Factory function to create domain-specific error classes.
 * @param {string} domain - The name of the domain (e.g., User, Reminder) to be used in the error messages.
 * @returns {Object} - An object containing custom error classes for the specified domain.
 */
function createDomainErrorClasses(domain: string) {
    return {
        /**
         * @class NotFoundError
         * @extends BaseError
         * @description 404 Not Found - The requested resource for the specified domain could not be found.
         * @example
         * throw new UserErrors.NotFound('User not found');
         */
        NotFound: class extends BaseError {
            constructor(description = `${domain} not found`) {
                super(`${domain}NotFoundError`, STATUS_CODE.NOT_FOUND, description);
            }
        },
        /**
         * @class AlreadyExistsError
         * @extends BaseError
         * @description 409 Conflict - The resource for the specified domain already exists.
         * @example
         * throw new UserErrors.AlreadyExists('User already exists');
         */
        AlreadyExists: class extends BaseError {
            constructor(description = `${domain} already exists`) {
                super(`${domain}AlreadyExistsError`, STATUS_CODE.CONFLICT, description);
            }
        },
        /**
         * @class ServerError
         * @extends BaseError
         * @description 500 Internal Server Error - A generic error occurred on the server while processing the request.
         * @example
         * throw new UserErrors.ServerError('Internal server error occurred while processing user data');
         */
        ServerError: class extends BaseError {
            constructor(description = `Internal server error with ${domain}`) {
                super(`${domain}ServerError`, STATUS_CODE.INTERNAL_ERROR, description);
            }
        },
        /**
         * @class UnauthorizedError
         * @extends BaseError
         * @description 401 Unauthorized - The client must authenticate itself to access the specified domain.
         * @example
         * throw new UserErrors.Unauthorized('Unauthorized access to user data');
         */
        Unauthorized: class extends BaseError {
            constructor(description = `Unauthorized access to ${domain}`) {
                super(`${domain}UnauthorizedError`, STATUS_CODE.UNAUTHORIZED, description);
            }
        },
        /**
         * @class ValidationError
         * @extends BaseError
         * @description 422 Unprocessable Entity - The request was well-formed but was unable to be followed due to semantic errors.
         * @example
         * throw new UserErrors.ValidationError('User data validation failed');
         */
        ValidationError: class extends BaseError {
            constructor(description = `${domain} validation failed`) {
                super(`${domain}ValidationError`, STATUS_CODE.UNPROCESSABLE_ENTITY, description);
            }
        }
    };
}

// Use this with different domains
export const UserErrors = createDomainErrorClasses('User');