import User from "../../models/userModel";

class GetUserByIdService {
   public async execute(userId: string) {
      const user = await User.findByPk(userId);
      if (!user) {
         throw new Error("User not found");
      }
      return user;
   }
}

export default GetUserByIdService;
