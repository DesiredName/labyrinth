import { DataTypes, Model, Sequelize } from 'sequelize';
import type {
  WebsiteAttributes,
  WebsiteCreationAttributes,
} from '@webx/shared';

class Website extends Model<WebsiteAttributes, WebsiteCreationAttributes> {}

function initWebsite(db: Sequelize) {
  Website.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      url: {
        type: DataTypes.STRING(512),
        unique: 'UX_Website_Name',
        allowNull: false,
        defaultValue: '',
      },
    },
    {
      sequelize: db,
      createdAt: false,
      updatedAt: false,
      indexes: [{ name: 'IX_Webiste_Name', fields: ['url'], unique: true }],
    },
  );
}

export { Website, initWebsite };
