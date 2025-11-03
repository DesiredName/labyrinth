import { DataTypes, Model, Sequelize } from 'sequelize';
import type { Optional } from 'sequelize';

type UserAttributes = {
  id: number;
  email: string;
  username: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type UserCreationAttributes = Optional<
  UserAttributes,
  'id' | 'createdAt' | 'updatedAt'
>;
type UserSafeAttributes = Omit<UserAttributes, 'id' | 'password'>;

class User extends Model<UserAttributes, UserCreationAttributes> {}

function initUser(db: Sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'uq_email',
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize: db },
  );
}

function sanitizeUser(user: User | null): UserSafeAttributes | null {
  if (user == null) {
    return user;
  }

  const json = user.toJSON() as UserSafeAttributes;
  delete (json as any).id;
  delete (json as any).password;
  return json;
}

export { User, initUser, sanitizeUser };
export { type UserSafeAttributes };
