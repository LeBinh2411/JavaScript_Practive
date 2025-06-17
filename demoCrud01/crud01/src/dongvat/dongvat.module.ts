import { Module, ValidationPipe } from '@nestjs/common';
import { DongvatService } from './dongvat.service';
import { DongvatController } from './dongvat.controller';
import { Dongvat } from './entities/dongvat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([Dongvat])],
  controllers: [DongvatController],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    },
    DongvatService,
  ],
})
export class DongvatModule {}
