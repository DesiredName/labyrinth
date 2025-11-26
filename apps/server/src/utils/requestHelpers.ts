import type { Response } from 'express';
import { HTTP_CODES } from '@webx/shared';

const RequestHelpers = {
  unauthorized(res: Response) {
    return res.sendStatus(HTTP_CODES.UNAUTHORIZED);
  },

  forbidden(res: Response) {
    return res.sendStatus(HTTP_CODES.UNAUTHORIZED);
  },
};

export { RequestHelpers };
