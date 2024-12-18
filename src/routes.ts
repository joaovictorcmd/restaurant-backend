import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticatedMiddleware } from "./middlewares/isAuthenticatedMiddleware";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

const router = Router();

// USER ROUTES
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticatedMiddleware, new DetailUserController().handle);

// CATEGORY ROUTES
router.post(
  "/category",
  isAuthenticatedMiddleware,
  new CreateCategoryController().handle
);
router.get(
  "/category",
  isAuthenticatedMiddleware,
  new ListCategoryController().handle
);

export { router };
