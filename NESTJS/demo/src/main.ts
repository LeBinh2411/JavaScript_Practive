import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { dbConfig } from './config/db.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //   }),
  // );
  console.log(process.env.url);
  console.log('>>>>>>>>>>>>>>>>>>.', dbConfig);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
