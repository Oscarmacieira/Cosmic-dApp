type YieldObj = {
  earn: string;
  earnSvg: string;
  stake1: string;
  stake1Svg: string;
  stake2: string;
  stake2Svg: string;
  multiplier: number;
  liquidity: number;
  wallet: number;
  balance: number;
};

export const yieldObj: YieldObj[] = [
  {
    stake1: "USDC.e",
    stake1Svg: "usdc",
    stake2: "AVAX",
    stake2Svg: "avax",
    multiplier: 3,
    earn: "ticker",
    earnSvg: "cegt",
    liquidity: 64123,
    wallet: 32,
    balance: 124.14,
  },
  {
    stake1: "MIM",
    stake1Svg: "mim",
    stake2: "AVAX",
    stake2Svg: "avax",
    multiplier: 5,
    earn: "ticker",
    earnSvg: "cegt",
    liquidity: 123.123,
    wallet: 23,
    balance: 341.14,
  },
  {
    stake1: "USDT.e",
    stake1Svg: "usdt",
    stake2: "AVAX",
    stake2Svg: "avax",
    multiplier: 2,
    earn: "ticker",
    earnSvg: "cegt",
    liquidity: 4132.23,
    wallet: 241,
    balance: 3553.2,
  },
  {
    stake1: "WETH.e",
    stake1Svg: "weth",
    stake2: "AVAX",
    stake2Svg: "avax",
    multiplier: 4,
    earn: "ticker",
    earnSvg: "cegt",
    liquidity: 834.33,
    wallet: 74,
    balance: 335.21,
  },
  {
    stake1: "JOE",
    stake1Svg: "joe",
    stake2: "AVAX",
    stake2Svg: "avax",
    multiplier: 5,
    earn: "ticker",
    earnSvg: "cegt",
    liquidity: 34.33,
    wallet: 4,
    balance: 35.21,
  },
];
