import { Request, Response } from "express";
import GetUserByIdService from "../../services/users/GetUserByIdService";

class GetUserByIdController {
   public async handle(req: Request, res: Response) {
      const { id } = req.params;
      try {
         const getUserById = new GetUserByIdService();
         const user = await getUserById.execute(id);
         res.status(200).json(user);
      } catch (error: any) {
         res.status(404).json({ error: error.message });
      }
   }
}

export default GetUserByIdController;
