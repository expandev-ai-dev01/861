/**
 * @summary
 * Logging utility for structured application logging.
 * Provides consistent logging interface across the application.
 *
 * @module utils/logger
 * @type utility
 */

export interface LogContext {
  correlationId?: string;
  operation?: string;
  params?: any;
  duration?: number;
  error?: string;
  stack?: string;
  [key: string]: any;
}

export const logger = {
  info: (message: string, context?: LogContext): void => {
    if (process.env.NODE_ENV !== 'test') {
      console.log(
        JSON.stringify({
          level: 'info',
          message,
          timestamp: new Date().toISOString(),
          ...context,
        })
      );
    }
  },

  error: (message: string, context?: LogContext): void => {
    if (process.env.NODE_ENV !== 'test') {
      console.error(
        JSON.stringify({
          level: 'error',
          message,
          timestamp: new Date().toISOString(),
          ...context,
        })
      );
    }
  },

  warn: (message: string, context?: LogContext): void => {
    if (process.env.NODE_ENV !== 'test') {
      console.warn(
        JSON.stringify({
          level: 'warn',
          message,
          timestamp: new Date().toISOString(),
          ...context,
        })
      );
    }
  },

  debug: (message: string, context?: LogContext): void => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(
        JSON.stringify({
          level: 'debug',
          message,
          timestamp: new Date().toISOString(),
          ...context,
        })
      );
    }
  },
};

export const generateCorrelationId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const sanitizeParams = (params: any): any => {
  const sanitized = { ...params };
  const sensitiveFields = ['password', 'token', 'secret', 'apiKey'];

  sensitiveFields.forEach((field) => {
    if (sanitized[field]) {
      sanitized[field] = '***REDACTED***';
    }
  });

  return sanitized;
};
