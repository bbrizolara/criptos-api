import { Request, Response } from "express";
import { GetLatestCurrencyService } from "src/services/currency";

export class CriptosController {
  static async get(req: Request, res: Response) {
    const { total, currencies } = await GetLatestCurrencyService.execute();

    return res.status(200).json({ total, currencies });
  }
}
