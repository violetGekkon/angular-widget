import {Injectable, NotFoundException} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Subdivision} from '../interfaces/subdivision.interface';

@Injectable(

)
export class SubdivisionsRepository {

  constructor(@InjectModel('Subdivision') private readonly subdivisionModel: Model<Subdivision>) {
  }

  async downloadAll() {
    const subdivisions = await this.subdivisionModel.find().exec();
    return subdivisions.map(sub => ({
      id: sub.id,
      ownerID: sub.Owner_ID,
      fullName: sub.Full_Name,
      shortName: sub.Short_Name,
      inn: sub.INN,
      kpp: sub.KPP,
      regionCode: sub.Region_Code,
      dejureAddress: sub.Dejure_Address,
      factAddress: sub.Fact_Address,
    }));
  }

  async insertSubdivision(
    ownerID: string,
    fullName: string,
    shortName: string,
    inn: string,
    kpp: string,
    regioneCode: string,
    dejureAdress: string,
    factAdress: string) {


    const newSubdivision = new this.subdivisionModel({
      Owner_ID: ownerID,
      Full_Name: fullName,
      Short_Name: shortName,
      INN: inn,
      KPP: kpp,
      Region_Code: regioneCode,
      Dejure_Address: dejureAdress,
      Fact_Address: factAdress,
    });

    const result = await newSubdivision.save();
    return result.id as string;

  }

  async getSingleSubdivision(id: string) {
    const subdivision = await this.findSubdivision(id);
    return {
      id: subdivision.id,
      ownerID: subdivision.Owner_ID,
      fullName: subdivision.Full_Name,
      shortName: subdivision.Short_Name,
      inn: subdivision.INN,
      kpp: subdivision.KPP,
      regionCode: subdivision.Region_Code,
      dejureAddress: subdivision.Dejure_Address,
      factAddress: subdivision.Fact_Address,
    };
  }

  async updateSubdivision(id: string, shortName: string, fullName: string) {
    const updatedSubdivision = await this.findSubdivision(id);
    if (shortName) {
      updatedSubdivision.Short_Name = shortName;
    }
    if (fullName) {
      updatedSubdivision.Full_Name = fullName;
    }
    updatedSubdivision.save();
  }

  async deleteSubdivision(id: string) {
    const result = await this.subdivisionModel.deleteOne({_id: id}).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Подразделение с id ${id} не найдено`);
    }
    return result;
  }

  async findSubdivision(id: string): Promise<Subdivision> {
    let subdivision;
    try {
      subdivision = await this.subdivisionModel.findById(id).exec();
    } catch (e) {
      throw new NotFoundException(`Подразделение с id ${id} не найдено`);
    }
    if (!subdivision) {
      throw new NotFoundException(`Подразделение с id ${id} не найдено`);
    }
    return subdivision;
  }
}
