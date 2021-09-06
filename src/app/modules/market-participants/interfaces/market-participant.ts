export interface IMarketParticipant {
  fsrarId: string;
  fullName: string;
  inn: string;
  kpp: string;
  firmType: string;
}

export interface IMarketParticipantPage {
  count: 0 ;
  results: [
    {
      owner_id: string ;
      company: string ;
      inn: string ;
      kpp: string ;
      dejure_address: string ;
      fact_address: string ;
      region_code: string ;
      region_name: string ;
      district_name: string ;
      license_reg_number: string ;
      license_date_begin: Date ;
      license_date_end: Date ;
      active_licenses_count: 0 ;
      inactive_licenses_count: 0 ;
      licenses_count: 0 ;
      licenses_types: string ;
      licenses_groups: string ;
      producttype_code: string ;
      risk: string ;
      risk_previous: string ;
      type_name: string ;
      status: string ;
      x: string ;
      y: string ;
      network_name: string ;
      inn_kpp: string
    }
  ];
}

export const firmTypeMap = new Map([
  ['производитель', 'maker'],
  ['импортер производитель', 'maker-importer'],
  ['производитель розница', 'maker-retailer'],
  ['импортер оптовик производитель', 'maker-importer-wholesaler'],
  ['оптовик', 'wholesaler'],
  ['импортер оптовик', 'wholesaler-importer'],
  ['оптовик производитель', 'maker-wholesaler'],
  ['оптовик перевозчик', 'wholesaler-carrier'],
  ['общепит', 'catering'],
  ['общепит розница', 'catering-retailer'],
  ['перевозчик', 'carrier'],
])
