import { Request, Response } from "express";
import { GenerateTokenService } from "src/services/session";

export class SessionsController {
  static async create(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await GenerateTokenService.execute({ email, password });

    return res.status(200).json(user);
  }
}
