import type { Optional } from 'sequelize';

type WebsiteAttributes = {
  id: number;
  url: string;
};

type WebsiteCreationAttributes = Optional<WebsiteAttributes, 'id'>;

export type { WebsiteAttributes, WebsiteCreationAttributes };
