import { Request, Response } from "express";
import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  keyGenerator: (req: Request): string => req.ip,
  handler(_, res: Response): void {
    res.status(429).send("Too many requests");
  },
});

export default rateLimiter;
