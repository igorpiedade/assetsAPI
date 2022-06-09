import { Router } from "express";

import { veryfyAdmin } from "../../middlewares/verifyAdmin";
import { verifyUserAuthenticated } from "../../middlewares/verifyUserAutheticated";
import { AuthenticateUserController } from "../../modules/users/authenticateUserUseCase/authenticateUserController";
import { CreateUserController } from "../../modules/users/createUserUseCase/createUserController";
import { ListAllUsersController } from "../../modules/users/listAllUsersUseCase/listAllUsersController";
import { CreateNewWalletController } from "../../modules/wallets/createNewWalletUseCase/createNewWalletController";
import { ListAllWalletsController } from "../../modules/wallets/listAllWalletsUseCase/listAllwalletsController";

const routes = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const authenticateUserController = new AuthenticateUserController();
const listAllWalletsController = new ListAllWalletsController();

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

routes.get("/wallet", verifyUserAuthenticated, listAllWalletsController.handle);

export { routes };
