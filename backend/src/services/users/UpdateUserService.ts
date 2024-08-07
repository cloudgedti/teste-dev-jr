import User from "../../models/userModel";

class UpdateUserService {
   public async execute(userId: string, userData: Partial<User>) {
      const user = await User.findByPk(userId);
      if (!user) {
         throw new Error("User not found");
      }

      if (userData.email && userData.email !== user.email) {
         const existingUser = await User.findOne({
            where: { email: userData.email },
         });
         if (existingUser) {
            throw new Error("Email is already in use by another user");
         }
      }

      await user.update(userData);
      return user;
   }
}

export default UpdateUserService;
