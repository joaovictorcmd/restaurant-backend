import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticatedMiddleware } from "./middlewares/isAuthenticatedMiddleware";

const router = Router();

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticatedMiddleware, new DetailUserController().handle);

export { router };
