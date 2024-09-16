import type { LoggerOptions, Logger } from 'winston'
import type Transport from 'winston-transport'

import { createLogger as _createLogger, transports as _transports, format } from 'winston'

const createLogger = (opts?: LoggerOptions): Logger => {
    const defaultTransport: Transport = new _transports.Console({
        format:
            process.env.NODE_ENV === 'production'
                ? format.json()
                : format.combine(format.colorize(), format.simple()),
        handleExceptions: true,
    })

    const transports = !opts?.transports
        ? defaultTransport
        : Array.isArray(opts.transports)
            ? [defaultTransport, ...opts.transports]
            : [defaultTransport, opts.transports]

    return _createLogger({
        ...opts,
        transports,
    })
}

export const logger = createLogger({
    level: process.env.LOG_LEVEL ?? 'info',
})

