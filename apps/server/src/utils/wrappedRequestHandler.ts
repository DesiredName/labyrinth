import { ZodError } from "zod";
import { logError } from "../services/log.srv.ts";
import type { MaybeAsyncRequestHandler } from "./asyncRequestHandler.ts";

class APIWrappedError extends Error {
    details?: string;

    constructor(message: string, details?: string) {
        super(message);

        this.details = details;

        Object.setPrototypeOf(this, new.target.prototype);
    }
}

function wrappedRequestHandler(
    handler: MaybeAsyncRequestHandler,
    msg?: string,
    details?: string
): MaybeAsyncRequestHandler {
    return async (req, res, next) => {
        try {
            await handler(req, res, next);
        } catch (err) {
            let output = {};

            switch (true) {
                case err instanceof ZodError:
                    const issues = err.issues.map((e) => e.message).join('; ');
                    output = new APIWrappedError(msg ?? 'Zod Error', issues || details);
                    break;
                case err instanceof APIWrappedError:
                    output = err;
                    break;
                case err instanceof Error:
                    output = new APIWrappedError(msg ?? err.message ?? 'Unknown error', details ?? err.message);
                    break;
                default:
                    output = new APIWrappedError('Unknown error', details)
                    break;
            }

            logError(msg ?? 'Error occured', output);

            res.json(output)
        }
    }
}

export { wrappedRequestHandler, APIWrappedError }