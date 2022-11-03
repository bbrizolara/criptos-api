import { Router } from "express";
import { CriptosController } from "src/controllers/criptos";
import isAuthenticated from "src/middleware/auth";
import rateLimiter from "src/middleware/rate_limiter";
import { admin } from "src/middleware/roles";

const criptosRouter = Router();

criptosRouter.get(
  "/",
  [rateLimiter, isAuthenticated, admin],
  CriptosController.get
);

export default criptosRouter;
