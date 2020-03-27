import {BarcodeItem} from './barcode-item';
import {MarkedAP, ProductiveCapacity, RawAgedType, SpiritType, WineMakingAP, WineMaterialType} from './calculation-items';

export interface CalculationDemand {
  spirit?: SpiritType;
  wineMaterial?: WineMaterialType;
  rawAged?: RawAgedType;
  markedAP?: MarkedAP;
  productiveCapacity?: ProductiveCapacity;
  wineMakingAP?: WineMakingAP;
}

export interface Address {
  country: string;
  regionCode: string;
  description: string;
}

export interface DeclarerDetails {
  clientRegId: string;
  inn: string;
  kpp: string;
  fullName: string;
  address_ur: Address;
  address: Address;
}

export interface BarcodeIssuanceFormInterface {
  codes: BarcodeItem[];
  declarerDetails: DeclarerDetails;
  calculationDemand: CalculationDemand;
}


