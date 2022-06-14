import { Router } from "express";

import { veryfyAdmin } from "../../middlewares/verifyAdmin";
import { verifyUserAuthenticated } from "../../middlewares/verifyUserAutheticated";
import { CreateNewAssetController } from "../../modules/_assets/createNewAssetUseCase/createNewAssetController";
import { ListAssetsController } from "../../modules/_assets/listAssetsUseCase/listAssetsController";
import { AuthenticateUserController } from "../../modules/users/authenticateUserUseCase/authenticateUserController";
import { CreateUserController } from "../../modules/users/createUserUseCase/createUserController";
import { ListAllUsersController } from "../../modules/users/listAllUsersUseCase/listAllUsersController";
import { CreateNewWalletController } from "../../modules/wallets/createNewWalletUseCase/createNewWalletController";
import { ListAllWalletsController } from "../../modules/wallets/listAllWalletsUseCase/listAllwalletsController";

const routes = Router();

// Users routes
const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const authenticateUserController = new AuthenticateUserController();

routes.post("/user", createUserController.handle);
routes.get(
    "/user",
    verifyUserAuthenticated,
    veryfyAdmin,
    listAllUsersController.handle
);
routes.post("/auth", authenticateUserController.handle);

// Wallets Routes
const listAllWalletsController = new ListAllWalletsController();
const createNewWalletController = new CreateNewWalletController();

routes.post(
    "/wallet",
    verifyUserAuthenticated,
    createNewWalletController.handle
);

routes.get("/wallet", verifyUserAuthenticated, listAllWalletsController.handle);

// Assets Routes
const createNewAssetController = new CreateNewAssetController();
const listAssetsController = new ListAssetsController();

routes.post("/asset", verifyUserAuthenticated, createNewAssetController.handle);
routes.get("/asset", verifyUserAuthenticated, listAssetsController.handle);

export { routes };
