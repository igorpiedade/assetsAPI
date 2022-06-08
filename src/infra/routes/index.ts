import { Router } from "express";

import { veryfyAdmin } from "../../middlewares/verifyAdmin";
import { verifyUserAuthenticated } from "../../middlewares/verifyUserAutheticated";
import { AuthenticateUserController } from "../../modules/users/authenticateUserUseCase/authenticateUserController";
import { CreateUserController } from "../../modules/users/createUserUseCase/createUserController";
import { ListAllUsersController } from "../../modules/users/listAllUsersUseCase/listAllUsersController";
import { CreateNewWalletController } from "../../modules/wallets/createNewWalletUseCase/createNewWalletController";

const routes = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const authenticateUserController = new AuthenticateUserController();

const createNewWalletController = new CreateNewWalletController();

// Users Routes
routes.post("/user", createUserController.handle);
routes.get(
    "/user",
    verifyUserAuthenticated,
    veryfyAdmin,
    listAllUsersController.handle
);
routes.post("/auth", authenticateUserController.handle);

// Wallets Routes
routes.post(
    "/wallet",
    verifyUserAuthenticated,
    createNewWalletController.handle
);

export { routes };
