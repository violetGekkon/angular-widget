import {Document} from 'mongoose';

// Объект, который mongoose создаст для нас
export interface Organisation extends Document {
  id: string;
  inn: string;
  kpp: string;
  ogrn: string;
  status: string;
  name: string;
  Region_Code: string;
  Dejure_Address: string;
  Fact_Address: string;
}
