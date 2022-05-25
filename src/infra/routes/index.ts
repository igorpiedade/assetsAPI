import { Router } from "express";

import { CreateUserController } from "../../modules/users/createUserUseCase/createUserController";
import { ListAllUsersController } from "../../modules/users/listAllUsersUseCase/listAllUsersController";

const routes = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();

// Users Routes
routes.post("/user/", createUserController.handle);
routes.get("/user/", listAllUsersController.handle);

export { routes };
