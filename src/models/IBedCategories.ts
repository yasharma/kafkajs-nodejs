export interface IBedCategoriesData {
  Dropdate: Date;
  ReportingDate: Date;
  entrydate: Date;
  Region: string;
  BedTypeCategoryName: string;
  BedTypeAgeName: string;
  Occupied: number;
  TotalCapacity: number;
  SurgeCapacity: number;
  LastUpdateDate: Date;
  FacilityName: string;
  AvailableBeds: number;
  CriticalStatus: string;
  BedType_Capacity: string;
  Pediatric_Adult: string;
  ICUvsOtherBeds: string;
  'Public/Private': string;
  TYPEFACILITY: string;
  FACILITY_SUBTYPE: string;
  'SelectMax(LatestSubmissionByFacility)': string;
  'COVID-NonCOVID': string;
}
