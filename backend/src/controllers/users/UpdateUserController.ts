import { Request, Response } from "express";
import UpdateUserService from "../../services/users/UpdateUserService";

class UpdateUserController {
   public async handle(req: Request, res: Response) {
      const { id } = req.params;
      const userData = req.body;
      try {
         const updateUser = new UpdateUserService();
         const user = await updateUser.execute(String(id), userData);
         res.status(200).json({
            user,
            status: "Updated",
         });
      } catch (error: any) {
         res.status(404).json({ error: error.message });
      }
   }
}

export default UpdateUserController;
