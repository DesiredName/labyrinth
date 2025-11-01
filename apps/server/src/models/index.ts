import { Sequelize } from 'sequelize';
import { initUser } from './User.ts';

function initModels(sequelize: Sequelize) {
  initUser(sequelize);
}

export { initModels }