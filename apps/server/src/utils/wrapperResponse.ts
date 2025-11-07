import type { BaseAPIResponse } from '@webx/shared';
import type { Response } from 'express';

function wrpappedResponse(
  res: Response,
  success: boolean,
  data: unknown = undefined,
  customCode: number = 404,
  meta: unknown = undefined,
) {
  res.status(success === true ? 200 : customCode).json({
    success,
    data,
    meta,
  } satisfies BaseAPIResponse<unknown, unknown>);
}

export { wrpappedResponse };
