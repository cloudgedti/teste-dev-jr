import { Request, Response } from "express";
import ListUsersService from "../../services/users/ListUsersService";

class ListUsersController {
   public async handle(req: Request, res: Response) {
      try {
         const listUsers = new ListUsersService();
         const users = await listUsers.execute();
         res.status(200).json(users);
      } catch (error) {
         res.status(500).json({ error: "Internal server error" });
      }
   }
}

export default ListUsersController;
