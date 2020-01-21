import {Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import {SubdivisionsRepository} from '../repositories/subdivisions.repository';

@Controller('subdivisions')
export class SubdivisionsController {

  constructor(private readonly subdivisionDB: SubdivisionsRepository) {

  }

  @Post()
  async addSubdivision(
    @Body('ownerID') ownerID: string,
    @Body('fullName') fullName: string,
    @Body('shortName') shortName: string,
    @Body('inn') inn: string,
    @Body('kpp') kpp: string,
    @Body('regionCode') regioneCode: string,
    @Body('dejureAddress') dejureAdress: string,
    @Body('factAddress') factAdress: string,
  ) {
    const generatedId = await this.subdivisionDB.insertSubdivision(ownerID, fullName, shortName, inn, kpp, regioneCode, dejureAdress, factAdress);
    return { id: generatedId};
  }

  @Get()
  async getSubdivisions() {
    const subdivisions = await this.subdivisionDB.downloadAll();
    return subdivisions;
  }

  @Get(':id')
  async getSubdivision(@Param('id') id: string) {
    const subdivision = await this.subdivisionDB.getSingleSubdivision(id);
    return subdivision;
  }

  // Используется в случае обновления поля существующего объекта
  // Если необходимо полностью обновить объект, тогда можно использовать Put
  // Логичнее, если  id объекта для обновления, будет содержаться в url запроса,
  // а в Body - параметры для обновления
  @Patch(':id')
  async updateSubdivision(@Param('id') id: string, @Body('shortName') shortName: string, @Body('fullName') fullName: string) {
    return this.subdivisionDB.updateSubdivision(id, shortName, fullName);
  }

  @Delete(':id')
  async deleteSubdivision(@Param('id') id: string) {
    return this.subdivisionDB.deleteSubdivision(id);
  }

}
