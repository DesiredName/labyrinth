import type {
  CheckUserResponseType,
  SigninUserRequestType,
  SigninUserResponseType,
  SignupUserRequestType,
  SignupUserResponseType,
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
    const data = (await res.json()) as CheckUserResponseType;
    return data;
  }

  async signin(creds: SigninUserRequestType) {
    const res = await fetch(`${this.baseURL}/auth/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(creds),
      credentials: 'include',
    });
    const data = (await res.json()) as SigninUserResponseType;
    return data;
  }

  async signup(creds: SignupUserRequestType) {
    const res = await fetch(`${this.baseURL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(creds),
      credentials: 'include',
    });
    const data = (await res.json()) as SignupUserResponseType;
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
