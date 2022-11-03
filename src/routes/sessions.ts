import { Router } from "express";
import { validateSessionRequest } from "src/middleware/validation";
import { SessionsController } from "src/controllers/sessions";

const sessionsRouter = Router();

sessionsRouter.post("/", validateSessionRequest, SessionsController.create);

export default sessionsRouter;
