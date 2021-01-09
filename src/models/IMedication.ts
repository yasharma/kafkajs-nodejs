export interface IMedicationData {
  date: string;
  code: string;
  medicine_name: string;
  avg_consumption: number;
  stock_in_hand: number;
  active_patients: number;
}

export interface IMedicationList {
  _id: string;
  code: string;
  name: string;
  stock_in_hand: number;
  createdAt: number;
}
