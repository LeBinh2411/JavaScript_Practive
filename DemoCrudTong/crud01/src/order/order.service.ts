import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { UserService } from 'src/user/user.service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    private readonly userService: UserService,
  ) {}

  //them don hang
  async create(dto: CreateOrderDto, username: string) {
    const user = await this.userService.findByUserName(username);
    if (!user)
      throw new NotFoundException('Khong tim thay nguoi dung 18-orderService');
    const newOrder = this.orderRepo.create({
      ...dto,
      nguoiTao: user,
    });
    const savedOrder = await this.orderRepo.save(newOrder);
    ///tra ve ten k len hien thi het thong tin
    return {
      id: savedOrder.id,
      maDon: savedOrder.maDon,
      soLuong: savedOrder.soLuong,
      gia: savedOrder.gia,
      ngayTao: savedOrder.ngayTao,
      nguoiTao: user.tenNguoiDung,
      sdtNguoiTao: user.sdt,
    };
  }

  //////--------------------------------------------

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
