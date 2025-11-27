import type { Response } from 'express';
import { HTTP_CODES } from '@webx/shared';

const RequestHelpers = {
  success(res: Response, data: unknown) {
    return res.status(HTTP_CODES.OK).json(data);
  },

  created(res: Response, data: unknown) {
    return res.status(HTTP_CODES.CREATED).json(data);
  },

  can_not_CRUD(res: Response) {
    return res.sendStatus(HTTP_CODES.CAN_NOT_CRUD);
  },

  not_found(res: Response) {
    return res.sendStatus(HTTP_CODES.NOT_FOUND);
  },

  unauthorized(res: Response) {
    return res.sendStatus(HTTP_CODES.UNAUTHORIZED);
  },

  forbidden(res: Response) {
    return res.sendStatus(HTTP_CODES.UNAUTHORIZED);
  },
};

export { RequestHelpers };
