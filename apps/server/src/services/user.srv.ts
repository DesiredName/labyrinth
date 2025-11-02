import { sanitizeUser, User } from '../models/User.ts';
import z from 'zod';
import { generateSalt, hashPassword } from '../utils/passwordUtils.ts';

class UserService {
  static async createUser(email: string, username: string, password: string) {
    const salt = await generateSalt();
    const hash = await hashPassword(password, salt);
    const user = await User.create({ email, username, password: hash, salt });
    return user;
  }

  static async getUserByEmailAndPass(email: string, password: string) {
    const user = await User.findOne({ where: { email } });
    if (user == null) {
      return user;
    }
    const hash = await hashPassword(password, user.getDataValue('salt'));
    if (hash !== user.getDataValue('password')) {
      return null;
    } else {
      return sanitizeUser(user);
    }
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

export { SignupUserParams, SigninUserParams, UserService };
