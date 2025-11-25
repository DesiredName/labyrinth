import express from 'express';
import * as WebsiteCRUD from '../controllers/website.ctrl.ts';

const router = express.Router();

router.get('/', WebsiteCRUD.getWebsite);
router.post('/', WebsiteCRUD.createWebsite);
router.patch('/', WebsiteCRUD.updateWebsite);
router.delete('/', WebsiteCRUD.deleteWebsite);

export { router };
