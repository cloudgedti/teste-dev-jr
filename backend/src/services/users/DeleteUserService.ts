import User from "../../models/userModel";

class DeleteUserService {
   public async execute(userId: string) {
      const user = await User.findByPk(userId);
      if (!user) {
         throw new Error("Product not found");
      }
      await user.destroy();
   }
}

export default DeleteUserService;
