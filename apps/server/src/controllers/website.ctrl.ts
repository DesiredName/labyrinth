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
  const search = req.query.search;
  const website = await WebsiteService.getWebsite(search);

  if (website == null) return RequestHelpers.not_found(res);

  RequestHelpers.success(res, website);
};

const createWebsite = async (
  req: Request<{}, {}, CreateWebsiteRequestType>,
  res: Response,
) => {
  const url = req.body.url;
  const website = await WebsiteService.createWebsite(url);

  if (website == null) return RequestHelpers.can_not_CRUD(res);

  RequestHelpers.created(res, website);
};

const updateWebsite = async (
  req: Request<{}, {}, UpdateWebsiteRequestType>,
  res: Response,
) => {
  const id = req.body.id;
  const url = req.body.url;
  const website = await WebsiteService.updateWebsite(id, url);

  if (website == null) return RequestHelpers.can_not_CRUD(res);

  RequestHelpers.success(res, website);
};

const deleteWebsite = async (
  req: Request,
  res: Response<any, { parsed: DeleteWebsiteRequestType }>,
) => {
  const { id } = res.locals.parsed;
  const website = await WebsiteService.deleteWebsite(id);

  if (website === 0) return RequestHelpers.can_not_CRUD(res);

  RequestHelpers.success(res, website);
};

export { getWebsite, createWebsite, updateWebsite, deleteWebsite };
