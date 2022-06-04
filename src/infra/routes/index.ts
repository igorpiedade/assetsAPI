import { Router } from "express";

import { AuthenticateUserController } from "../../modules/users/authenticateUserUseCase/authenticateUserController";
import { CreateUserController } from "../../modules/users/createUserUseCase/createUserController";
import { ListAllUsersController } from "../../modules/users/listAllUsersUseCase/listAllUsersController";

const routes = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const authenticateUserController = new AuthenticateUserController();

// Users Routes
routes.post("/user/", createUserController.handle);
routes.get("/user/", listAllUsersController.handle);
routes.post("/auth", authenticateUserController.handle);

export { routes };
