import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SubdivisionsModule} from './subdivisions/subdivisions.module';
import {FrontendMiddleware} from './common/middleware/frontend.middleware';

@Module({
  imports: [
    SubdivisionsModule,
    MongooseModule.forRoot(
      'mongodb+srv://sia_user:h7TmLXUvtrPrTCOl@clustertest.immus.gcp.mongodb.net/nestjs-demo?retryWrites=true&w=majority', {useNewUrlParser: true}),

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
