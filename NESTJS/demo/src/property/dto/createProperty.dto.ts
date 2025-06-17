import { IsInt, IsPositive, IsString, Length, Max, Min } from 'class-validator';

export class CreatePropertyDto {
  //Kiem tra xem co phai la String hay k
  @IsString()
  //Do dai cua chuoi toi thieu, toi da
  @Length(2, 10, { message: 'error on length' })
  // @Length(2, 20, { groups: ['create'] })
  // @Length(1, 15, { groups: ['update'] })
  name: string;

  @IsString()
  //groups: ['create'] 	Áp dụng khi sử dụng group là "create" (ví dụ: khi tạo dữ liệu).
  //@Length(2, 20, { groups: ['create'] })
  //groups: ['update'] Áp dụng khi group là "update" (ví dụ: khi cập nhật dữ liệu).
  //@Length(1, 15, { groups: ['update'] })
  description: string;

  @IsInt()
  // @Min(2, { groups: ['create'] })
  // @Max(999999, { groups: ['update'] })
  @IsPositive() // chi chap nhan so lon hon 0
  price: number;
}
