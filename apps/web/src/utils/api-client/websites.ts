import type { WebsiteAttributes } from '@webx/shared';

const ApiClientWebsitesModule = (baseURL: string) => {
  return {
    read: async () => {
      const response = await fetch(`${baseURL}/websites`, {
        method: 'GET',
        credentials: 'include',
      });
      const data = (await response.json()) as WebsiteAttributes[];

      return data;
    },
  };
};

export { ApiClientWebsitesModule };
