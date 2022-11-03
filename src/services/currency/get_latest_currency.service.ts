import axios from "axios";
import { COINMARKET_API_KEY } from "src/config";
import { getRedis, setRedis } from "src/middleware/redis";
import { Currency } from "src/models/currency";
import { bitcoinListLatestUrl } from "src/utils";

interface IResponse {
  total: number;
  currencies: Currency[];
}

export class GetLatestCurrencyService {
  static async execute(): Promise<IResponse> {
    let result: Currency[] = [];

    const resultStr = await getRedis("latest_currency");

    if (resultStr) {
      result = JSON.parse(resultStr);
    } else {
      const {
        data: { data },
      } = await axios.get(bitcoinListLatestUrl, {
        headers: {
          "X-CMC_PRO_API_KEY": COINMARKET_API_KEY,
        },
      });

      result = data.map((c) => {
        return new Currency(
          c.id,
          c.name,
          c.symbol,
          c.total_supply,
          c.last_updated
        );
      });

      // Set redis cache
      await setRedis("latest_currency", JSON.stringify(result));
    }

    return {
      total: result.length,
      currencies: result,
    };
  }
}
