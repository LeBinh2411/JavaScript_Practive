import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class PaginationDTO {
  @IsNumber() //check la so
  @IsPositive() //lay so lon hon 0
  @IsOptional() //neu k chuyen skip thi bo qua ktra va khong bao loi
  skip: number;

  @IsNumber()
  @IsPositive()
  @IsOptional() //neu khong chuyen limit thi bo qua va khong kiem tra
  limit: number;
}
