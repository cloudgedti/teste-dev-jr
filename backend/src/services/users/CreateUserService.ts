import User from "../../models/userModel";

class CreateUserService {
   public async execute(userData: Partial<User>) {
      if (!userData.email) {
         throw new Error("Email is required");
      }

      const existingUser = await User.findOne({
         where: { email: userData.email },
      });

      if (existingUser) {
         throw new Error("User with this email already exists");
      }

      const user = await User.create(userData);
      return user;
   }
}

export default CreateUserService;
