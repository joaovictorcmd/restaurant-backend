"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ListProductsByCategoryController_1 = require("./controllers/product/ListProductsByCategoryController");
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const RemoveOrderController_1 = require("./controllers/order/RemoveOrderController");
const AddItemController_1 = require("./controllers/order/AddItemController");
const RemoveItemController_1 = require("./controllers/order/RemoveItemController");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const ListOrdersController_1 = require("./controllers/order/ListOrdersController");
const DetailOrderController_1 = require("./controllers/order/DetailOrderController");
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
const isAuthenticatedMiddleware_1 = require("./middlewares/isAuthenticatedMiddleware");
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./temp"));
// USER ROUTES
router.post("/users", new CreateUserController_1.CreateUserController().handle);
router.post("/session", new AuthUserController_1.AuthUserController().handle);
router.get("/me", isAuthenticatedMiddleware_1.isAuthenticatedMiddleware, new DetailUserController_1.DetailUserController().handle);
// CATEGORY ROUTES
router.post("/category", isAuthenticatedMiddleware_1.isAuthenticatedMiddleware, new CreateCategoryController_1.CreateCategoryController().handle);
router.get("/category", isAuthenticatedMiddleware_1.isAuthenticatedMiddleware, new ListCategoryController_1.ListCategoryController().handle);
// PRODUCT ROUTES
router.post("/product", isAuthenticatedMiddleware_1.isAuthenticatedMiddleware, new CreateProductController_1.CreateProductController().handle);
router.get("/products", isAuthenticatedMiddleware_1.isAuthenticatedMiddleware, new ListProductsByCategoryController_1.ListProductsByCategoryController().handle);
// ORDER ROUTES
router.post("/order", isAuthenticatedMiddleware_1.isAuthenticatedMiddleware, new CreateOrderController_1.CreateOrderController().handle);
router.delete("/order", isAuthenticatedMiddleware_1.isAuthenticatedMiddleware, new RemoveOrderController_1.RemoveOrderController().handle);
router.post("/order/add", isAuthenticatedMiddleware_1.isAuthenticatedMiddleware, new AddItemController_1.AddItemController().handle);
router.delete("/order/remove", isAuthenticatedMiddleware_1.isAuthenticatedMiddleware, new RemoveItemController_1.RemoveItemController().handle);
router.put("/order/send", isAuthenticatedMiddleware_1.isAuthenticatedMiddleware, new SendOrderController_1.SendOrderController().handle);
router.get("/orders", isAuthenticatedMiddleware_1.isAuthenticatedMiddleware, new ListOrdersController_1.ListOrdersController().handle);
router.get("/order/detail", isAuthenticatedMiddleware_1.isAuthenticatedMiddleware, new DetailOrderController_1.DetailOrderController().handle);
router.put("/order/finish", isAuthenticatedMiddleware_1.isAuthenticatedMiddleware, new FinishOrderController_1.FinishOrderController().handle);
