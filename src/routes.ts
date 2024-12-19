import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductsByCategoryController } from "./controllers/product/ListProductsByCategoryController";

import { isAuthenticatedMiddleware } from "./middlewares/isAuthenticatedMiddleware";

import uploadConfig from "./config/multer";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./temp"));

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

// PRODUCT ROUTES
router.post(
  "/product",
  isAuthenticatedMiddleware,
  upload.single("file"),
  new CreateProductController().handle
);
router.get(
  "/products",
  isAuthenticatedMiddleware,
  new ListProductsByCategoryController().handle
);

// ORDER ROUTES
router.post(
  "/order",
  isAuthenticatedMiddleware,
  new CreateOrderController().handle
);
router.delete(
  "/order",
  isAuthenticatedMiddleware,
  new RemoveOrderController().handle
);

export { router };
