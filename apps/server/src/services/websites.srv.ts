import { Website } from '../models/Website.ts';

class WebsitesService {
  static async getWebsites() {
    const websites = await Website.findAll();
    return websites;
  }
}

export { WebsitesService };
