import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDongvatDto } from './dto/create-dongvat.dto';
import { UpdateDongvatDto } from './dto/update-dongvat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dongvat } from './entities/dongvat.entity';
import { Repository } from 'typeorm';

@Injectable() //danh dau class nay duoc inject vao noi khac
export class DongvatService {
  constructor(
    @InjectRepository(Dongvat) private dongVatRepo: Repository<Dongvat>,
  ) {}
  async create(createDongvatDto: CreateDongvatDto) {
    return await this.dongVatRepo.save(createDongvatDto);
  }

  findAll() {
    return `This action returns all dongvat`;
  }

  async findOne(id: number) {
    const dongVat = await this.dongVatRepo.findOne({
      where: {
        id,
      },
    });
    if (!dongVat) throw new NotFoundException();
    return dongVat;
  }

  async update(id: number, updateDongvatDto: UpdateDongvatDto) {
    return await this.dongVatRepo.update({ id }, updateDongvatDto);
  }

  async remove(id: number) {
    return await this.dongVatRepo.delete({
      id,
    });
  }
}
