import { COINMARKET_API_URL, COINMARKET_TOTAL_CURRENCIES } from "src/config";

export const bitcoinListLatestUrl =
  COINMARKET_API_URL +
  "cryptocurrency/listings/latest?limit=" +
  COINMARKET_TOTAL_CURRENCIES;

export const bitcoinExchangeInfoUrl = COINMARKET_API_URL + "exchange/info";
