import { col, fn, Op } from 'sequelize';
import { Website } from '../models/Website.ts';

class WebsiteService {
  static getWebsite(search: string) {
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

  static createWebsite(url: string) {
    return Website.create({ url }, { returning: true });
  }

  static updateWebsite(id: number, url: string) {
    return Website.update({ url }, { where: { id }, returning: true });
  }

  static deleteWebsite(id: number) {
    return Website.destroy({ where: { id } });
  }
}

export { WebsiteService };
