import type { Request, Response } from 'express';
import { WebsitesService } from '../services/websites.srv.ts';
import { wrappedRequestHandler } from '../utils/wrappedRequestHandler.ts';
import { wrpappedResponse } from '../utils/wrapperResponse.ts';

const getWebsites = wrappedRequestHandler(
  async (req: Request, res: Response) => {
    const websites = await WebsitesService.getWebsites();
    wrpappedResponse(res, true, websites, 401);
  },
);

export { getWebsites };
