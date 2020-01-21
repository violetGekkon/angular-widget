import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { resolve} from 'path';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), { cors: true });
  app.useStaticAssets({
    root: resolve(__dirname, '..', '../dist/angular-widget'),
  });
  // app.setGlobalPrefix('/api');
  await app.listen(3000);
}
bootstrap();

