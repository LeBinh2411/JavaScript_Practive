import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDTO } from './dto/pagination.dto';
import { DEFAULT_PAGE_SIZE } from 'src/utils/constants';

@Injectable() //biến class này có thể inject vào nơi khác.
export class UserService {
  constructor(
    @InjectRepository(User) //nói với NestJS rằng bạn cần Repository của Entity User
    private readonly userRepository: Repository<User>,
  ) {}
  //NestJS sẽ tự động "tiêm" (inject) Repository<User> vào biến userRepository.
  //Repository<User> là công cụ mạnh để truy vấn bảng user như find(), findOne(), save(), delete()..

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
    //do phai doc du lieu mat nhieu thoi gian => dung async => thanh ham bat dong bo => Promise<User[]>: kieu tra ve cua ham findAll()
    //this dung de truy cap den thuoc tinh hoac phuong thuc cua chinh class do
  }

  async findAllPagination(paginationDTO: PaginationDTO) {
    return await this.userRepository.find({
      skip: paginationDTO.skip,
      take: paginationDTO.limit ?? DEFAULT_PAGE_SIZE,
      //Nếu paginationDTO.limit không có hoặc là null hoặc undefined, thì sẽ dùng giá trị mặc định DEFAULT_PAGE_SIZE.
    });
  }

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto); //tao entity tu DTO de add du lieu
    return await this.userRepository.save(user); //luu du lieu vao db
  }

  async removeBySdt(sdt: string) {
    const result = await this.userRepository.delete({ sdt });

    if (result.affected === 0) {
      throw new NotFoundException(`Khong tim thay so dien thoai nay: ${sdt}`);
    }

    return `Da xoa thanh cong sdt: ${sdt}`;
  }

  async updateBySdt(sdt: string, updateUserDto: Partial<CreateUserDto>) {
    const result = await this.userRepository.update({ sdt }, updateUserDto);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Không tìm thấy user với số điện thoại: ${sdt}`,
      );
    }
    return { message: `Đã cập nhật user có sdt: ${sdt}` };
    //Partial<CreateUserDto> cho phep update 1 hoac nhieu thuoc tinh, khong can day du
  }

  async findByUserName(username: string) {
    return this.userRepository.findOne({
      where: { tenNguoiDung: username },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
