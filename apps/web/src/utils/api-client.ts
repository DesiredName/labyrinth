import type { UserSafeAttributes } from '@shared/index';
import type {
  LoginUserRequestType,
  RegisterUserRequestType,
} from '@shared/ServerAPI';

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = 'http://localhost:3000/api') {
    this.baseURL = baseURL;
  }

  async checkAuth() {
    const res = await fetch(`${this.baseURL}/auth/check`, {
      method: 'POST',
      credentials: 'include',
    });
    const data = (await res.json()) as UserSafeAttributes;
    return data;
  }

  async login(creds: LoginUserRequestType) {
    const res = await fetch(`${this.baseURL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(creds),
      credentials: 'include',
    });
    const data = (await res.json()) as UserSafeAttributes;
    return data;
  }

  async register(creds: RegisterUserRequestType) {
    const res = await fetch(`${this.baseURL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(creds),
      credentials: 'include',
    });
    const data = (await res.json()) as UserSafeAttributes;
    return data;
  }

  async signout() {
    const res = await fetch(`${this.baseURL}/auth/signout`, {
      method: 'POST',
      credentials: 'include',
    });

    return res.ok === true;
  }
}

export { ApiClient };
