import * as mongoose from 'mongoose';

export const OrganisationSchema = new mongoose.Schema({
  inn: String,
  kpp: String,
  ogrn: String,
  status: String,
  name: String,
  Region_Code: String,
  Dejure_Address: String,
  Fact_Address: String,
});
