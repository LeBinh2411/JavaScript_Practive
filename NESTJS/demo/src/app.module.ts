import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { dbConfig } from './config/db.config';
import { User } from './entities/user.entity';
import { Property } from './entities/property.entity';
import { PropertyFeature } from './entities/propertyFeature.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: '.env',
    }),
    //PropertyModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: dbConfig,
      // type: 'postgres',
      // url: process.env.URL,
      // port: 5432,
      // entities: [User, Property, PropertyFeature],
      // synchronize: true, // ko dung synchronize
      // logging: false,
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
