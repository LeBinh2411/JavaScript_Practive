import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { DongvatService } from './dongvat.service';
import { CreateDongvatDto } from './dto/create-dongvat.dto';
import { UpdateDongvatDto } from './dto/update-dongvat.dto';

@Controller('dongvat')
export class DongvatController {
  constructor(private readonly dongvatService: DongvatService) {}

  @Post()
  create(@Body() createDongvatDto: CreateDongvatDto) {
    return this.dongvatService.create(createDongvatDto);
  }

  @Get()
  findAll() {
    return this.dongvatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.dongvatService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDongvatDto: UpdateDongvatDto) {
    return this.dongvatService.update(+id, updateDongvatDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    return this.dongvatService.remove(+id);
  }
}
