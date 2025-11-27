import type { Request, Response } from 'express';
import { WebsiteService } from '../services/website.srv.ts';
import { HTTP_CODES } from '@webx/shared';
import { RequestHelpers } from '../utils/requestHelpers.ts';

const getWebsite = async (req: Request, res: Response) => {
  const search = '1';
  const website = await WebsiteService.getWebsite(search);

  if (website == null) return RequestHelpers.not_found(res);

  RequestHelpers.success(res, website);
};

const createWebsite = async (req: Request, res: Response) => {
  const url = '1';
  const website = await WebsiteService.createWebsite(url);

  if (website == null) return RequestHelpers.can_not_CRUD(res);

  RequestHelpers.created(res, website);
};

const updateWebsite = async (req: Request, res: Response) => {
  const id = 1;
  const url = '2';
  const website = await WebsiteService.updateWebsite(id, url);

  if (website == null) return RequestHelpers.can_not_CRUD(res);

  RequestHelpers.success(res, website);
};

const deleteWebsite = async (req: Request, res: Response) => {
  const id = 1;
  const website = await WebsiteService.deleteWebsite(id);

  if (website === 0) return RequestHelpers.can_not_CRUD(res);

  RequestHelpers.success(res, website);
};

export { getWebsite, createWebsite, updateWebsite, deleteWebsite };
