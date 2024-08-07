import { Request, Response } from "express";
import CreateUserService from "../../services/users/CreateUserService";

class CreateUserController {
   public async handle(req: Request, res: Response) {
      try {
         const createUser = new CreateUserService();
         const user = await createUser.execute(req.body);

         res.status(201).json({
            user,
            status: "Created",
         });
      } catch (err: any) {
         res.status(400).json({ error: err.message });
      }
   }
}

export default CreateUserController;
