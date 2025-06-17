import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  //dotenv.config(); // ⬅ Nạp biến từ file .env
  const app = await NestFactory.create(AppModule);

  //kich hoat validation toan cuc
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
