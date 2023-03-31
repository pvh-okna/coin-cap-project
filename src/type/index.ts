export type CoinRequest = {
  data: ItemsType[];
  timestamp: number;
};
export type ItemsType = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer?: string;
};
export type CoinType = {
  id: string;
  name: string;
  price: string;
  quantity: string;
};
