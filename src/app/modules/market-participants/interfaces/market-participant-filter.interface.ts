export interface IMarketParticipantFilter {
  queryString: string;
  companyParams: {
    owner_id?: string;
    company?: string;
    inn?: string;
    kpp?: string;
    dejure_address?: string;
    fact_address?: string;
    region_code?: string;
    region_name?: string;
    district_name?: string;
    license_reg_number?: string;
    license_date_begin?: Date;
    license_date_end?: Date;
    active_licenses_count?: number;
    inactive_licenses_count?: number;
    licenses_count?: number;
    licenses_types?: string;
    licenses_groups?: string;
    producttype_code?: string;
    risk?: string;
    risk_previous?: string;
    type_name?: string;
    status?: string;
    x?: string;
    y?: string;
    network_name?: string;
    inn_kpp?: string
  };
  topLeft_x: number;
  topLeft_y: number;
  bottomRight_x: number;
  bottomRight_y: number;
  page: number;
  pageLength: number;
}
