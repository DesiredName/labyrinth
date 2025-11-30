import { ApiClientAuthModule } from './api-client/auth';
import { ApiClientWebsiteModule } from './api-client/website';
import { ApiClientWebsitesModule } from './api-client/websites';

class ApiClient {
  private baseURL: string;
  auth: ReturnType<typeof ApiClientAuthModule>;
  website: ReturnType<typeof ApiClientWebsiteModule>;
  websites: ReturnType<typeof ApiClientWebsitesModule>;

  constructor(baseURL: string = 'http://localhost:3000/api') {
    this.baseURL = baseURL;
    this.auth = ApiClientAuthModule(baseURL);
    this.website = ApiClientWebsiteModule(baseURL);
    this.websites = ApiClientWebsitesModule(baseURL);
  }
}

export { ApiClient };
