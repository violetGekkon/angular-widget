import {Injectable, NotFoundException} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Organisation} from '../interfaces/organisation.interface';
import {OrganisationDto} from '../../../../shared/dto/organisation.dto';

@Injectable(

)
export class OrganisationsRepository {

  constructor(@InjectModel('Organisation') private readonly organisationModel: Model<Organisation>) {
  }

  async downloadAll() {
    const organisations = await this.organisationModel.find().exec();
    return organisations;
  }

  async insertLEOrg(inn: string, kpp: string) {

    // const newSubdivision = new this.organisationModel({
    //   inn: org.inn,
    //   kpp: org.kpp,
    //   ogrn: org.ogrn,
    //   status: org.status,
    //   name: String,
    //   Region_Code: String,
    //   Dejure_Address: String,
    //   Fact_Address: String,
    // });
    //
    // const result = await newSubdivision.save();
    // return result.id as string;

    console.log(inn);
    return 'ok';
  }

  // async getSingleSubdivision(id: string) {
  //   const subdivision = await this.findSubdivision(id);
  //   return {
  //     id: subdivision.id,
  //     ownerID: subdivision.Owner_ID,
  //     fullName: subdivision.Full_Name,
  //     shortName: subdivision.Short_Name,
  //     inn: subdivision.INN,
  //     kpp: subdivision.KPP,
  //     regionCode: subdivision.Region_Code,
  //     dejureAddress: subdivision.Dejure_Address,
  //     factAddress: subdivision.Fact_Address,
  //   };
  // }

  // async updateSubdivision(id: string, shortName: string, fullName: string) {
  //   const updatedSubdivision = await this.findSubdivision(id);
  //   if (shortName) {
  //     updatedSubdivision.Short_Name = shortName;
  //   }
  //   if (fullName) {
  //     updatedSubdivision.Full_Name = fullName;
  //   }
  //   updatedSubdivision.save();
  // }
  //
  // async deleteSubdivision(id: string) {
  //   const result = await this.organisationModel.deleteOne({_id: id}).exec();
  //   if (result.n === 0) {
  //     throw new NotFoundException(`Подразделение с id ${id} не найдено`);
  //   }
  //   return result;
  // }
  //
  // async findSubdivision(id: string): Promise<Subdivision> {
  //   let subdivision;
  //   try {
  //     subdivision = await this.organisationModel.findById(id).exec();
  //   } catch (e) {
  //     throw new NotFoundException(`Подразделение с id ${id} не найдено`);
  //   }
  //   if (!subdivision) {
  //     throw new NotFoundException(`Подразделение с id ${id} не найдено`);
  //   }
  //   return subdivision;
  // }
}
