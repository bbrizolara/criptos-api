import axios from "axios";
import { COINMARKET_API_KEY } from "src/config";
import { Exchange } from "src/models/exchange";
import { bitcoinExchangeInfoUrl } from "src/utils";
import AppError from "@utils/app_error";

export class GetExchangeListService {
  static async execute(): Promise<Exchange[]> {
    let result: Exchange[] = [];
    let {
      data: { data },
    } = await axios.get(bitcoinExchangeInfoUrl, {
      headers: {
        "X-CMC_PRO_API_KEY": COINMARKET_API_KEY,
      },
    });

    result = data.map((c: any) => {
      return new Exchange(c.id, c.name);
    });

    return result;
  }
}
