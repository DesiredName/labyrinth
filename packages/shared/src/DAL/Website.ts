import type { CreateWebsiteRequestType } from '@shared/ServerAPI/website.api.ts';

type WebsiteAttributes = {
  id: number;
  createdAt?: Date;
} & CreateWebsiteRequestType;

type WebsiteCreationAttributes = CreateWebsiteRequestType;

export type { WebsiteAttributes, WebsiteCreationAttributes };
