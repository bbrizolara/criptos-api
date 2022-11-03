import { NextFunction, Request, Response } from "express";
import AppError from "@utils/app_error";
import { sessionSchema } from "./session.schema";

export const validateSessionRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validation = sessionSchema.validate(req.body);

  if (validation?.error) {
    throw new AppError("Invalid session request value", 400);
  }

  return next();
};
