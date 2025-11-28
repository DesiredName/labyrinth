import type { Request, Response } from 'express';
import { WebsitesService } from '../services/websites.srv.ts';
import { RequestHelpers } from '../utils/requestHelpers.ts';

const getWebsites = async (_: Request, res: Response) => {
  const webistes = await WebsitesService.getWebsites();

  RequestHelpers.success(res, webistes);
};

export { getWebsites };
