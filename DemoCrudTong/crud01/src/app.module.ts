import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config/db.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', // tu dong load bien moi truong env
      isGlobal: true, // va duoc dung o moi noi trong app
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService], //dung de lay bien tu .env
      useFactory: dbConfig, // truyen dbConfig de ket noi db
    }), // 👈 Kết nối với PostgreSQL
    UserModule,
    OrderModule,
    AuthModule, //import module user, de su dung duoc constroller va service cua user
  ],
  controllers: [AppController], //
  providers: [AppService],
})
export class AppModule {}
