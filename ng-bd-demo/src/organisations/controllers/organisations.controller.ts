import {Controller, Get, Post, Body, Param, Patch, Delete, Req} from '@nestjs/common';
import {OrganisationsRepository} from '../repositories/organisations.repository';

@Controller('organisations')
export class OrganisationsController {

  constructor(private readonly organisationDB: OrganisationsRepository) {

  }

  @Post()
  async addLE(@Req() req: Request) {
    const resp = await this.organisationDB.insertLEOrg('inn', 'kpp');
    return resp;
  }
  //
  // @Get()
  // async getSubdivisions() {
  //   const subdivisions = await this.organisationDB.downloadAll();
  //   return subdivisions;
  // }
  //
  // @Get(':id')
  // async getSubdivision(@Param('id') id: string) {
  //   const subdivision = await this.organisationDB.getSingleSubdivision(id);
  //   return subdivision;
  // }
  //
  // // Используется в случае обновления поля существующего объекта
  // // Если необходимо полностью обновить объект, тогда можно использовать Put
  // // Логичнее, если  id объекта для обновления, будет содержаться в url запроса,
  // // а в Body - параметры для обновления
  // @Patch(':id')
  // async updateSubdivision(@Param('id') id: string, @Body('shortName') shortName: string, @Body('fullName') fullName: string) {
  //   return this.organisationDB.updateSubdivision(id, shortName, fullName);
  // }
  //
  // @Delete(':id')
  // async deleteSubdivision(@Param('id') id: string) {
  //   return this.organisationDB.deleteSubdivision(id);
  // }

}
