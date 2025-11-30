import type {
  CreateWebsiteRequestType,
  DeleteWebsiteRequestType,
  UpdateWebsiteRequestType,
  WebsiteAttributes,
} from '@webx/shared';

const ApiClientWebsiteModule = (baseURL: string) => {
  return {
    create: async (params: CreateWebsiteRequestType) => {
      const url = new URL('webiste', baseURL);
      const body = JSON.stringify(params);
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        credentials: 'include',
      });
      const data = (await response.json()) as WebsiteAttributes;

      return data;
    },

    read: async (search: string) => {
      const url = new URL('webiste', baseURL);
      url.searchParams.set('search', search);
      const response = await fetch(url, {
        method: 'GET',
        credentials: 'include',
      });
      const data = (await response.json()) as WebsiteAttributes;

      return data;
    },

    update: async (params: UpdateWebsiteRequestType) => {
      const url = new URL('webiste', baseURL);
      const body = JSON.stringify(params);
      const response = await fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body,
        credentials: 'include',
      });
      const data = (await response.json()) as WebsiteAttributes;

      return data;
    },

    delete: async (params: DeleteWebsiteRequestType) => {
      const url = new URL('webiste', baseURL);
      url.searchParams.set('id', params.id.toString());
      const response = await fetch(url, {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = (await response.json()) as number;

      return data;
    },
  };
};

export { ApiClientWebsiteModule };
