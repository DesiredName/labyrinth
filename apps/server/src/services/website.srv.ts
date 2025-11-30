import { col, fn, Op } from 'sequelize';
import { Website } from '../models/Website.ts';
import type {
  CreateWebsiteRequestType,
  DeleteWebsiteRequestType,
  GetWebsiteRequestType,
  UpdateWebsiteRequestType,
} from '@webx/shared';

class WebsiteService {
  static getWebsite({ search }: GetWebsiteRequestType) {
    return Website.findOne({
      where: {
        [Op.or]: [
          { id: search },
          {
            url:
              (fn('LOWER', col('url')),
              {
                [Op.like]: `%${search.toLowerCase()}%`,
              }),
          },
        ],
      },
    });
  }

  static createWebsite(params: CreateWebsiteRequestType) {
    return Website.create(params);
  }

  static updateWebsite({ id, url }: UpdateWebsiteRequestType) {
    return Website.update({ url }, { where: { id }, returning: true });
  }

  static deleteWebsite({ id }: DeleteWebsiteRequestType) {
    return Website.destroy({ where: { id } });
  }
}

export { WebsiteService };
