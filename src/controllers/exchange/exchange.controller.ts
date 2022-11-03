import { Request, Response } from "express";
import { GetExchangeListService } from "src/services/exchange";

export class ExchangeController {
  static async get(req: Request, res: Response) {
    const exchangeList = await GetExchangeListService.execute();

    return res.status(200).json({ result: exchangeList });
  }
}
