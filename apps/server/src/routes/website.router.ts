import express from 'express';
import * as WebsiteCRUD from '../controllers/website.ctrl.ts';
import { validatedSchema } from '../middleware/schema.middleware.ts';
import {
  CreateWebsiteRequest,
  DeleteWebsiteRequest,
  GetWebsiteRequest,
  UpdateWebsiteRequest,
} from '@webx/shared';

const router = express.Router();

router.get('/', validatedSchema(GetWebsiteRequest), WebsiteCRUD.getWebsite);
router.post(
  '/',
  validatedSchema(CreateWebsiteRequest),
  WebsiteCRUD.createWebsite,
);
router.patch(
  '/',
  validatedSchema(UpdateWebsiteRequest),
  WebsiteCRUD.updateWebsite,
);
router.delete(
  '/',
  validatedSchema(DeleteWebsiteRequest),
  WebsiteCRUD.deleteWebsite,
);

export { router };
