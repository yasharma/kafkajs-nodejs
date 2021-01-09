export interface IStaffingRatioData {
  Dropdate: Date;
  Type: string;
  Critical: string;
  'Regular Ratio': number;
  'Surge Ratio': number;
}

export interface IStaffingData {
  Dropdate: Date;
  entrydate: Date;
  date: Date;
  Work_Classification: string;
  ClinicianCount: string;
  MaxDate: Date;
  SelectMax: number;
  Region: string;
  ClinicianGroup: string;
  FacilityName: string;
  StaffType: string;
  FACILITYLICENSE: string;
  TierType: string;
}
