import { sanitizeUser, User } from '../models/User.ts';

class UserService {
  static async getProfile(email?: string) {
    if (email == null) return null;
    const user = await User.findOne({ where: { email } });
    return sanitizeUser(user);
  }
}

export { UserService };
