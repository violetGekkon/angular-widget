import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SubdivisionsModule} from './subdivisions/subdivisions.module';
import {FrontendMiddleware} from './common/middleware/frontend.middleware';
import {OrganisationsModule} from './organisations/organisations.module';

@Module({
  imports: [
    SubdivisionsModule,
    OrganisationsModule,
    MongooseModule.forRoot(
      'mongodb+srv://sia_user:y9f1P1mHQwoAUVPF@clustertest-immus.gcp.mongodb.net/nestjs-demo?retryWrites=true&w=majority'),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(FrontendMiddleware)
      .forRoutes({
        path: '/*', // для всех маршрутов
        method: RequestMethod.ALL, // для всех методов
      });
  }
}
