import { IsString, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 15, { message: 'Nho hon 3 hoac lon hon 15 ky tu roi' })
  tenNguoiDung: string;

  @IsString()
  @Length(3, 10, {
    message: 'Mat khau khong duoc nho hon 3 hoac lon hon 10 ky tu roi',
  })
  matKhau: string;

  @IsString()
  @Matches(/^0\d{9}$/, {
    message: 'Số điện thoại phải bắt đầu bằng 0 và có đúng 10 chữ số',
  })
  sdt: string;
}
