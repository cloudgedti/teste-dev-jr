import { Request, Response } from "express";
import DeleteUserService from "../../services/users/DeleteUserService";

class DeleteUserController {
   public async handle(req: Request, res: Response) {
      const { id } = req.params;
      try {
         const deleteUser = new DeleteUserService();
         const user = await deleteUser.execute(id);
         res.status(200).json({
            status: "Deleted",
            user,
         });
      } catch (error: any) {
         res.status(404).json({ error: error.message });
      }
   }
}

export default DeleteUserController;
