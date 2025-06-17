import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ForbiddenException,
  Request,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  //them don hang
  @UseGuards(AuthGuard('jwt'))
  @Post()
  // chuyen 2 tham so,tham so 1 createOrderDto se nhan du lieu tu body khi nguoi dung nhap, con kieu du lieu la CreateOrderDto(gioi han cac truong....)
  // tham so thu 2 req, req se nhan
  // @Request(): request chính là đối tượng đại diện cho toàn bộ HTTP Request mà client gửi đến server.
  // @Request() Lấy toàn bộ thông tin  - (body, headers, params, user, ...)
  // request.user	Dữ liệu người dùng sau khi đã xác thực (nếu dùng JWT)
  async create(@Body() createOrderDto: CreateOrderDto, @Request() req) {
    console.log('User from token:', req.user); // để kiểm tra
    if (req.user.role !== 'nhanvien') {
      throw new ForbiddenException(
        'Ban khong co quyen tao don hang 14-orderController',
      );
    }
    return this.orderService.create(createOrderDto, req.user.username);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
