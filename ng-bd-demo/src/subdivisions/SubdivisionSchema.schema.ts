import * as mongoose from 'mongoose';

export const SubdivisionSchema = new mongoose.Schema({
  Owner_ID: String,
  Full_Name: String,
  Short_Name: String,
  INN: String,
  KPP: String,
  Region_Code: String,
  Dejure_Address: String,
  Fact_Address: String,
});

