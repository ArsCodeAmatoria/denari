export type CPIEntry = {
  month: string;
  cpi: number;
  pct_change: number | null;
  peg_multiplier: number;
};

export const cpiData: CPIEntry[] = [
  { month: "Jan 2022", cpi: 281.148, pct_change: null, peg_multiplier: 1.0000 },
  { month: "Feb 2022", cpi: 283.716, pct_change: 0.91, peg_multiplier: 1.0091 },
  { month: "Mar 2022", cpi: 287.504, pct_change: 1.33, peg_multiplier: 1.0227 },
  { month: "Apr 2022", cpi: 289.109, pct_change: 0.56, peg_multiplier: 1.0284 },
  { month: "May 2022", cpi: 292.296, pct_change: 1.10, peg_multiplier: 1.0397 },
  { month: "Jun 2022", cpi: 296.311, pct_change: 1.37, peg_multiplier: 1.0540 },
  { month: "Jul 2022", cpi: 296.276, pct_change: -0.01, peg_multiplier: 1.0539 },
  { month: "Aug 2022", cpi: 296.171, pct_change: -0.04, peg_multiplier: 1.0535 },
  { month: "Sep 2022", cpi: 296.808, pct_change: 0.22, peg_multiplier: 1.0558 },
  { month: "Oct 2022", cpi: 298.012, pct_change: 0.41, peg_multiplier: 1.0601 },
  { month: "Nov 2022", cpi: 297.711, pct_change: -0.10, peg_multiplier: 1.0590 },
  { month: "Dec 2022", cpi: 296.797, pct_change: -0.31, peg_multiplier: 1.0558 },
  { month: "Jan 2023", cpi: 299.170, pct_change: 0.80, peg_multiplier: 1.0642 },
  { month: "Feb 2023", cpi: 300.840, pct_change: 0.56, peg_multiplier: 1.0702 },
  { month: "Mar 2023", cpi: 301.836, pct_change: 0.33, peg_multiplier: 1.0737 },
  { month: "Apr 2023", cpi: 302.318, pct_change: 0.16, peg_multiplier: 1.0754 },
  { month: "May 2023", cpi: 302.801, pct_change: 0.16, peg_multiplier: 1.0771 },
  { month: "Jun 2023", cpi: 303.841, pct_change: 0.34, peg_multiplier: 1.0808 },
  { month: "Jul 2023", cpi: 305.109, pct_change: 0.42, peg_multiplier: 1.0853 },
  { month: "Aug 2023", cpi: 305.909, pct_change: 0.26, peg_multiplier: 1.0881 },
  { month: "Sep 2023", cpi: 306.421, pct_change: 0.17, peg_multiplier: 1.0900 },
  { month: "Oct 2023", cpi: 306.519, pct_change: 0.03, peg_multiplier: 1.0903 },
  { month: "Nov 2023", cpi: 306.049, pct_change: -0.15, peg_multiplier: 1.0886 },
  { month: "Dec 2023", cpi: 305.106, pct_change: -0.31, peg_multiplier: 1.0853 },
  { month: "Jan 2024", cpi: 306.402, pct_change: 0.42, peg_multiplier: 1.0898 },
  { month: "Feb 2024", cpi: 307.811, pct_change: 0.46, peg_multiplier: 1.0949 },
  { month: "Mar 2024", cpi: 309.229, pct_change: 0.46, peg_multiplier: 1.0999 },
];

export type CPIOracleLog = {
  date: string;
  txHash: string;
  oracleAddress: string;
  cpiValue: number;
  blockNumber: number;
};

export const cpiOracleLogs: CPIOracleLog[] = [
  {
    date: "Mar 24, 2024",
    txHash: "0x4f2a3d5bc9e4e521ab7ff5ad3d8c5c1207894c7d88f5bd4e466f1c6720846e1e",
    oracleAddress: "0x7A23608a8eBe71868013BDA0d900351A83bb4Dc2",
    cpiValue: 309.229,
    blockNumber: 16453201,
  },
  {
    date: "Feb 22, 2024",
    txHash: "0x2e8f3e7c9b5a3d4b2c1d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b",
    oracleAddress: "0x7A23608a8eBe71868013BDA0d900351A83bb4Dc2",
    cpiValue: 307.811,
    blockNumber: 16325740,
  },
  {
    date: "Jan 20, 2024",
    txHash: "0x3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b",
    oracleAddress: "0x7A23608a8eBe71868013BDA0d900351A83bb4Dc2",
    cpiValue: 306.402,
    blockNumber: 16189623,
  },
  {
    date: "Dec 19, 2023",
    txHash: "0x5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b",
    oracleAddress: "0x7A23608a8eBe71868013BDA0d900351A83bb4Dc2",
    cpiValue: 305.106,
    blockNumber: 16058974,
  },
  {
    date: "Nov 22, 2023",
    txHash: "0x7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d",
    oracleAddress: "0x7A23608a8eBe71868013BDA0d900351A83bb4Dc2",
    cpiValue: 306.049,
    blockNumber: 15943287,
  },
]; 