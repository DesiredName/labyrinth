import { col, fn, Op } from 'sequelize';
import { Website } from '../models/Website.ts';

class WebsiteService {
  static async getWebsite(search: string) {
    const websites = await Website.findOne({
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
    return websites;
  }

  static async createWebsite(url: string) {
    const websites = await Website.create({ url }, { returning: true });
    return websites;
  }

  static async updateWebsite(id: number, url: string) {
    const websites = await Website.update(
      { url },
      { where: { id }, returning: true },
    );
    return websites;
  }

  static async deleteWebsite(id: number) {
    const websites = await Website.destroy({ where: { id } });
    return websites;
  }
}

export { WebsiteService };
