import type { Request, Response } from 'express';
import { WebsiteService } from '../services/website.srv.ts';
import { HTTP_CODES } from '@webx/shared';

const getWebsite = async (req: Request, res: Response) => {
  const search = '1';
  const website = await WebsiteService.getWebsite(search);

  if (website == null) {
    return res.sendStatus(HTTP_CODES.NOT_FOUND);
  }

  res.json(website);
};

const createWebsite = async (req: Request, res: Response) => {
  const url = '1';
  const website = await WebsiteService.createWebsite(url);

  if (website == null) {
    return res.sendStatus(HTTP_CODES.CAN_NOT_CRUD);
  }

  return res.status(HTTP_CODES.CREATED).json(website);
};

const updateWebsite = async (req: Request, res: Response) => {
  const id = 1;
  const url = '2';
  const website = await WebsiteService.updateWebsite(id, url);

  if (website == null) {
    return res.sendStatus(HTTP_CODES.CAN_NOT_CRUD);
  }

  return res.json(website);
};

const deleteWebsite = async (req: Request, res: Response) => {
  const id = 1;
  const website = await WebsiteService.deleteWebsite(id);

  if (website === 0) {
    return res.sendStatus(HTTP_CODES.CAN_NOT_CRUD);
  }
  return res.sendStatus(HTTP_CODES.OK);
};

export { getWebsite, createWebsite, updateWebsite, deleteWebsite };
