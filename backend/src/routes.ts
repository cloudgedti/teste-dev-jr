import { Router } from "express";

//Controllers
import CreateUserController from "./controllers/users/CreateUserController";
import ListUsersController from "./controllers/users/ListUsersController";
import GetUserByIdController from "./controllers/users/GetUserByIdController";
import DeleteUserController from "./controllers/users/DeleteUserController";
import UpdateUserController from "./controllers/users/UpdateUserController";

// Middleware
import { userValidator } from "./validators/userValidator";
import validationMiddleware from "./middlewares/validationMiddleware";

const router = Router();

router.post(
   "/users",
   userValidator,
   validationMiddleware,
   new CreateUserController().handle
);
router.get("/users", new ListUsersController().handle);
router.get("/users/:id", new GetUserByIdController().handle);
router.put(
   "/users/:id",
   userValidator,
   validationMiddleware,
   new UpdateUserController().handle
);
router.delete("/users/:id", new DeleteUserController().handle);

export { router };
