import { Router } from "express";
import { ExchangeController } from "src/controllers/exchange";
import isAuthenticated from "src/middleware/auth";
import rateLimiter from "src/middleware/rate_limiter";
import { admin } from "src/middleware/roles";

const exchangeRouter = Router();

exchangeRouter.get(
  "/",
  [rateLimiter, isAuthenticated, admin],
  ExchangeController.get
);

export default exchangeRouter;
