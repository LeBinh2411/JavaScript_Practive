import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { PaginationDTO } from './dto/pagination.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getAll')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/getAllpn')
  async findAllPagination(@Query() paginationDTO: PaginationDTO) {
    return this.userService.findAllPagination(paginationDTO);
  }

  @Post('addUser')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Delete(':sdt')
  deleteUser(@Param('sdt') sdt: string) {
    return this.userService.removeBySdt(sdt);
  }

  @Put(':sdt')
  updateBySdt(
    @Param('sdt') sdt: string,
    @Body() updateUserDTO: Partial<CreateUserDto>,
  ) {
    return this.userService.updateBySdt(sdt, updateUserDTO);
  }

  ///
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
