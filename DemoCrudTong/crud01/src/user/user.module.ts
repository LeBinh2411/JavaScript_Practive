import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // ✅ cấu hình entity cho repository
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // 👈 Xuất UserService để module khác dùng được
})
export class UserModule {}
