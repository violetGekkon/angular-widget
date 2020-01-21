import { Document } from 'mongoose';

// Объект, который mongoose создаст для нас
export interface Subdivision extends Document {
  id: string;
  Owner_ID: string;
  Full_Name: string;
  Short_Name: string;
  INN: string;
  KPP: string;
  Region_Code: string;
  Dejure_Address: string;
  Fact_Address: string;
}
