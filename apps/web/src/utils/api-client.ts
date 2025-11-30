import { ApiClientAuthModule } from './api-client/auth';

class ApiClient {
  private baseURL: string;
  auth: ReturnType<typeof ApiClientAuthModule>;

  constructor(baseURL: string = 'http://localhost:3000/api') {
    this.baseURL = baseURL;
    this.auth = ApiClientAuthModule(baseURL);
  }
}

export { ApiClient };
