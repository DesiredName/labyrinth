import { DataTypes, Model, Sequelize } from 'sequelize';
import type { Optional } from 'sequelize';

type UserAttributes = {
  id: number;
  name: string;
  password: string;
  salt: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type UserCreationAttributes = Optional<
  UserAttributes,
  'id' | 'createdAt' | 'updatedAt'
>;
type UserSafeAttributes = Omit<UserAttributes, 'password' | 'salt'>;

class User extends Model<UserAttributes, UserCreationAttributes> {}

function initUser(sequelize: Sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'uq_username',
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize },
  );
}

function sanitizeUser(user: User | null): UserSafeAttributes | null {
  if (user == null) {
    return user;
  }

  const json = user.toJSON() as UserSafeAttributes;
  delete (json as any).password;
  delete (json as any).salt;
  return json;
}

export { User, initUser, sanitizeUser };
