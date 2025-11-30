import type {
  LoginUserRequestType,
  RegisterUserRequestType,
  UserSafeAttributes,
} from '@webx/shared';

const ApiClientAuthModule = (baseURL: string) => {
  return {
    checkAuth: async () => {
      const res = await fetch(`${baseURL}/auth/check`, {
        method: 'POST',
        credentials: 'include',
      });
      const data = (await res.json()) as UserSafeAttributes;
      return data;
    },

    login: async (creds: LoginUserRequestType) => {
      const res = await fetch(`${baseURL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(creds),
        credentials: 'include',
      });
      const data = (await res.json()) as UserSafeAttributes;
      return data;
    },

    register: async (creds: RegisterUserRequestType) => {
      const res = await fetch(`${baseURL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(creds),
        credentials: 'include',
      });
      const data = (await res.json()) as UserSafeAttributes;
      return data;
    },

    signout: async () => {
      const res = await fetch(`${baseURL}/auth/signout`, {
        method: 'POST',
        credentials: 'include',
      });

      return res.ok === true;
    },
  };
};

export { ApiClientAuthModule };
