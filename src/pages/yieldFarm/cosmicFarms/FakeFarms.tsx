type FarmObj = {
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
  apr: number;
  entryFee: number;
  exitFee: number;
};

export const farmObj: FarmObj[] = [
  {
    stake1: "AVAX",
    stake1Svg: "avax",
    stake2: "ticker",
    stake2Svg: "cegt",
    multiplier: 5,
    earn: "ticker",
    earnSvg: "cegt",
    liquidity: 64123,
    wallet: 32,
    balance: 124.14,
    apr: 34.54,

    entryFee: 1,
    exitFee: 2,
  },
  {
    stake1: "ticker",
    stake1Svg: "cegt",
    stake2: "USDT",
    stake2Svg: "usdt",
    multiplier: 4,
    earn: "ticker",
    earnSvg: "cegt",
    liquidity: 123.123,
    wallet: 23,
    balance: 341.14,
    apr: 24.43,

    entryFee: 1,
    exitFee: 2,
  },
  {
    stake1: "ticker",
    stake1Svg: "cegt",
    stake2: "USDC",
    stake2Svg: "usdc",
    multiplier: 3,
    earn: "energy",
    earnSvg: "energy",
    liquidity: 4132.23,
    wallet: 241,
    balance: 3553.2,
    apr: 123.21,
    entryFee: 0.1,
    exitFee: 1,
  },
  {
    stake1: "ticker",
    stake1Svg: "cegt",
    stake2: "USDC",
    stake2Svg: "usdc",
    multiplier: 2,
    earn: "HP",
    earnSvg: "hp",
    liquidity: 834.33,
    wallet: 74,
    balance: 335.21,
    apr: 234.11,
    entryFee: 0.1,
    exitFee: 1,
  },
  {
    stake1: "",
    stake1Svg: "",
    stake2: "ticker",
    stake2Svg: "cegt",
    multiplier: 1,
    earn: "ticker",
    earnSvg: "cegt",
    liquidity: 34.33,
    wallet: 4,
    balance: 35.21,
    apr: 6.34,

    entryFee: 1,
    exitFee: 2,
  },
];
