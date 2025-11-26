import { Website } from '../models/Website.ts';

class WebsitesService {
  static getWebsites() {
    return Website.findAll();
  }
}

export { WebsitesService };
