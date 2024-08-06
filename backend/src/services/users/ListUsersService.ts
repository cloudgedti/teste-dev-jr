import User from "../../models/userModel";

class ListUsersService {
   public async execute() {
      const user = await User.findAll();
      return user;
   }
}

export default ListUsersService;
