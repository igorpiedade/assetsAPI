/* eslint-disable prettier/prettier */
import { Router } from "express";

import { veryfyAdmin } from "../../middlewares/verifyAdmin";
import { verifyUserAuthenticated } from "../../middlewares/verifyUserAutheticated";
import { CreateNewAssetController } from "../../modules/_assets/createNewAssetUseCase/createNewAssetController";
import { ListAssetsController } from "../../modules/_assets/listAssetsUseCase/listAssetsController";
import { CreateNewClassController } from "../../modules/assetsClass/createNewClassController";
import { CreateNewOperationController } from "../../modules/operations/createNewOperationUseCase/createNewOperationController";
import { ListOperationsController } from "../../modules/operations/listOperationsUseCase/listOperationsController";
import { UpdateOperationController } from "../../modules/operations/updateOperationUseCase/updateOperationController";
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
routes.get("/user", verifyUserAuthenticated, veryfyAdmin, listAllUsersController.handle);
routes.post("/auth", authenticateUserController.handle);

// Wallets Routes
const listAllWalletsController = new ListAllWalletsController();
const createNewWalletController = new CreateNewWalletController();

routes.post("/wallet", verifyUserAuthenticated, createNewWalletController.handle);
routes.get("/wallet", verifyUserAuthenticated, listAllWalletsController.handle);

// Assets Routes
const createNewAssetController = new CreateNewAssetController();
const listAssetsController = new ListAssetsController();

routes.post("/asset", verifyUserAuthenticated, createNewAssetController.handle);
routes.get("/asset", verifyUserAuthenticated, listAssetsController.handle);

// Assets Class Routes
const createNewClassController = new CreateNewClassController();

routes.post("/assetclass", verifyUserAuthenticated, createNewClassController.handle);

// Operation Routes

const createNewOperationController = new CreateNewOperationController();
const listUserOperations = new ListOperationsController();
const updateOperation = new UpdateOperationController();

routes.post("/operation", verifyUserAuthenticated, createNewOperationController.handle);
routes.get("/operation", verifyUserAuthenticated, listUserOperations.handle);
routes.put("/operation", verifyUserAuthenticated, updateOperation.handle);

export { routes };
