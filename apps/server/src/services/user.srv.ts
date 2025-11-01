import { sanitizeUser, User } from '../models/User.ts';
import z from 'zod';
import { generateSalt, hashPassword } from '../utils/passwordUtils.ts';

class UserService {
  static async createUser(name: string, password: string) {
    const salt = await generateSalt();
    const hash = await hashPassword(password, salt);
    const user = await User.create({ name, password: hash, salt });
    return user;
  }

  static async getAllUsers() {
    return await User.findAll();
  }

  static async getUserByNameAndPass(name: string, password: string) {
    const user = await User.findOne({ where: { name } });
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

  static async getUserById(id: string | number) {
    const user = await User.findByPk(id);
    return sanitizeUser(user);
  }
}

const CreateUserParams = z.object({
  name: z.string().nonempty(),
  password: z.string().nonempty(),
});

const GetUserByIDParams = z.object({
  id: z.union([z.string().nonempty(), z.number().min(0)]),
});

export { CreateUserParams, GetUserByIDParams, UserService };
