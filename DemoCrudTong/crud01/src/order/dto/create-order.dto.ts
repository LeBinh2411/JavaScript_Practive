import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  maDon: string;

  @IsNumber()
  @IsPositive({ message: 'Số lượng phải là số dương (> 0)' })
  soLuong: number;

  @IsNumber()
  @IsPositive({ message: 'Số lượng phải là số dương (> 0)' })
  gia: number;
}
