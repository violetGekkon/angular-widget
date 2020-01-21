import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {SubdivisionsController} from './controllers/subdivisions.controller';
import {SubdivisionsRepository} from './repositories/subdivisions.repository';
import {SubdivisionSchema} from './SubdivisionSchema.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Subdivision', schema: SubdivisionSchema }]),
  ],
  controllers: [
    SubdivisionsController,
  ],
  providers: [
    SubdivisionsRepository,
  ],
})
export class SubdivisionsModule {

}
