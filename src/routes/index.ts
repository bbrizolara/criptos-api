import { Router } from "express";
import criptosRouter from "./criptos";
import exchangeRouter from "./exchange";
import sessionsRouter from "./sessions";

const routes = Router();

routes.get("/ping", (req: any, res: any) => {
  res.send("pong");
});

routes.use("/session", sessionsRouter);
routes.use("/criptos", criptosRouter);
routes.use("/exchange", exchangeRouter);

export default routes;
