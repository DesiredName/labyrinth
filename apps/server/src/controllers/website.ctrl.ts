import type { Request, Response } from 'express';
import { wrappedRequestHandler } from '../utils/wrappedRequestHandler.ts';
import { wrpappedResponse } from '../utils/wrapperResponse.ts';
import { WebsiteService } from '../services/website.srv.ts';

const getWebsite = wrappedRequestHandler(
  async (req: Request, res: Response) => {
    const search = '1';
    const websites = await WebsiteService.getWebsite(search);
    wrpappedResponse(res, true, websites, 401);
  },
);

const createWebsite = wrappedRequestHandler(
  async (req: Request, res: Response) => {
    const url = '1';
    const websites = await WebsiteService.createWebsite(url);
    wrpappedResponse(res, true, websites, 401);
  },
);

const updateWebsite = wrappedRequestHandler(
  async (req: Request, res: Response) => {
    const id = 1;
    const url = '2';
    const websites = await WebsiteService.updateWebsite(id, url);
    wrpappedResponse(res, true, websites, 401);
  },
);

const deleteWebsite = wrappedRequestHandler(
  async (req: Request, res: Response) => {
    const id = 1;
    const websites = await WebsiteService.deleteWebsite(id);
    wrpappedResponse(res, true, websites, 401);
  },
);

export { getWebsite, createWebsite, updateWebsite, deleteWebsite };
