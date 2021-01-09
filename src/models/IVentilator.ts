export interface IVentilatorData {
  dropDate: Date;
  FacilityNumber: string;
  FacilityName: string;
  Region: string;
  entrydate: Date;
  VentilatorAdultTotalQuantity: string;
  VentilatorAdultQuantityInUse: string;
  VentilatorPortableTotalQuantity: string;
  VentilatorPortableQuantityInUse: string;
  VentilatorPediatricsTotalQuantity: string;
  VentilatorPediatricsQuantityInUse: string;
  ReportingDate: Date;
  'SEHA/NONSEHA': string;
  'COVID/NONCOVID': string;
  total_Ventilator: string;
  In_use_Ventilator: string;
  SelectMax: string;
}
