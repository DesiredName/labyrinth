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

export type { UserAttributes, UserCreationAttributes, UserSafeAttributes };
