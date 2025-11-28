import { HTTP_CODES } from '@webx/shared';
import type { Request, Response, NextFunction } from 'express';
import type { ZodObject } from 'zod';

const validatedSchema =
  (schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      res.locals.parsed = {
        query: parsed.query,
        params: parsed.params,
      };

      next();
    } catch (e: any) {
      return res.status(HTTP_CODES.VALIDATION_FAILURE).send(e.errors);
    }
  };

export { validatedSchema };
