export interface IPPEData {
  date: string;
  code: string;
  ppe_name: string;
  avg_consumption: number;
  stock_in_hand: number;
  active_patients: number;
}

export interface IPPEList {
  _id: string;
  code: string;
  name: string;
  stock_in_hand: number;
  createdAt: number;
}
