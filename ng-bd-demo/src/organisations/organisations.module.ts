import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {OrganisationsController} from './controllers/organisations.controller';
import {OrganisationsRepository} from './repositories/organisations.repository';
import {OrganisationSchema} from './organisation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Organisation', schema: OrganisationSchema }]),
  ],
  controllers: [
    OrganisationsController,
  ],
  providers: [
    OrganisationsRepository,
  ],
})
export class OrganisationsModule {

}
