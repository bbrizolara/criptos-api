import AppError from "@utils/app_error";
import { NextFunction, Request, Response } from "express";
import { Roles } from "src/models/user";

export const admin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user.roles.includes(Roles.Admin))
    throw new AppError("Forbidden action", 403);

  next();
};

export const editor = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user.roles.includes(Roles.Editor))
    throw new AppError("Forbidden action", 403);

  next();
};

export const viewer = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user.roles.includes(Roles.Viewer))
    throw new AppError("Forbidden action", 403);

  next();
};
