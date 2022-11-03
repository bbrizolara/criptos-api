import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { APP_SECRET } from "src/config";
import AppError from "@utils/app_error";
import { Roles } from "src/models/user";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new AppError("Unauthorized", 401);
  }

  const [, token] = authHeader.split(" ");
  let secret = "SECRETEXAMPLE";
  if (APP_SECRET) {
    secret = APP_SECRET;
  }

  const decodedToken = verify(token, secret);
  const { sub } = decodedToken as ITokenPayload;
  // Subject = user.id + user.roles
  const [id, rolesStr] = sub.split(" ");
  const roles = rolesStr.split(",") as Array<Roles>;

  req.user = {
    id,
    roles,
  };

  return next();
};

export default isAuthenticated;
