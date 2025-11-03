import { sanitizeUser, User } from '../models/User.ts';
import z from 'zod';
import argon2 from 'argon2';

class AuthService {
  static async registerNewUser(
    email: string,
    username: string,
    password: string,
  ) {
    const hash = await argon2.hash(password);
    const user = await User.create({
      email,
      username,
      password: hash,
    });
    return sanitizeUser(user);
  }

  static async verifyUser(email: string, password: string) {
    const user = await User.findOne({ where: { email } });
    const hash = user?.getDataValue('password') ?? '';
    const isEqual = await argon2.verify(hash, password);
    const output = isEqual ? user : null;
    return sanitizeUser(output);
  }
}

const SignupUserParams = z.object({
  email: z.email().nonempty(),
  username: z.string().nonempty(),
  password: z.string().nonempty(),
});

const SigninUserParams = z.object({
  email: z.email().nonempty(),
  password: z.string().nonempty(),
});

export { SignupUserParams, SigninUserParams, AuthService };
