import type {
  LoginUserRequestType,
  RegisterUserRequestType,
} from '@webx/shared';
import { sanitizeUser, User } from '../models/User.ts';
import argon2 from 'argon2';

class AuthService {
  static async registerNewUser({
    email,
    username,
    password,
  }: RegisterUserRequestType) {
    const hash = await argon2.hash(password);
    const user = await User.create({
      email,
      username,
      password: hash,
    }).catch(() => {
      return null;
    });
    return sanitizeUser(user);
  }

  static async verifyUser({ email, password }: LoginUserRequestType) {
    const user = await User.findOne({ where: { email } });
    const hash = user?.getDataValue('password') ?? '';
    const isEqual = await argon2.verify(hash, password);
    const output = isEqual ? user : null;
    return sanitizeUser(output);
  }
}

export { AuthService };
