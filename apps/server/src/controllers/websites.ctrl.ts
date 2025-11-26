import type { Request, Response } from 'express';
import { WebsitesService } from '../services/websites.srv.ts';

const getWebsites = async (req: Request, res: Response) => {
  return await WebsitesService.getWebsites();
};

export { getWebsites };
