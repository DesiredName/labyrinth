import type { Request, Response } from 'express';
import { WebsiteService } from '../services/website.srv.ts';
import { RequestHelpers } from '../utils/requestHelpers.ts';
import type {
  CreateWebsiteRequestType,
  DeleteWebsiteRequestType,
  GetWebsiteRequestType,
  UpdateWebsiteRequestType,
} from '@webx/shared';

const getWebsite = async (
  req: Request<{}, {}, {}, GetWebsiteRequestType>,
  res: Response,
) => {
  const website = await WebsiteService.getWebsite(req.query);

  if (website == null) return RequestHelpers.not_found(res);

  RequestHelpers.success(res, website);
};

const createWebsite = async (
  req: Request<{}, {}, CreateWebsiteRequestType>,
  res: Response,
) => {
  const website = await WebsiteService.createWebsite(req.body);

  if (website == null) return RequestHelpers.can_not_CRUD(res);

  RequestHelpers.created(res, website);
};

const updateWebsite = async (
  req: Request<{}, {}, UpdateWebsiteRequestType>,
  res: Response,
) => {
  const website = await WebsiteService.updateWebsite(req.body);

  if (website == null) return RequestHelpers.can_not_CRUD(res);

  RequestHelpers.success(res, website[1]);
};

const deleteWebsite = async (
  _: Request,
  res: Response<any, { parsed: DeleteWebsiteRequestType }>,
) => {
  const website = await WebsiteService.deleteWebsite(res.locals.parsed);

  if (website === 0) return RequestHelpers.can_not_CRUD(res);

  RequestHelpers.success(res, website);
};

export { getWebsite, createWebsite, updateWebsite, deleteWebsite };
