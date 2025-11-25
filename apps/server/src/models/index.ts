import { Sequelize } from 'sequelize';
import { initUser } from './User.ts';
import { initWebsite } from './Website.ts';

function initModels(sequelize: Sequelize) {
  initUser(sequelize);
  initWebsite(sequelize);
}

export { initModels };
