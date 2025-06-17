import { IsInt, IsNumber, IsPositive, IsString, Length } from 'class-validator';

export class CreateDongvatDto {
  // @IsNumber()//check xem co phai la so k
  // id: number;

  @IsString()
  @Length(2, 15, { message: 'Ten phai co do dai tu 2 den 20 ky tu' })
  ten: string;

  @IsInt()
  @IsPositive()//chi chap nhan so lon hon 0
  tuoi: number;
}
