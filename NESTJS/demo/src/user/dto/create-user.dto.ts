import { IsEmail, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsUrl()
  @IsOptional() //danh dau 1 thuoc tinh khong bat buoc khi validate
  avatarUrl?: string; // ?: khong bat buoc phai truyen gia tri

  @IsString()
  password: string;
}
