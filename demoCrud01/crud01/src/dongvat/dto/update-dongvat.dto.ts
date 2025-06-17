import { PartialType } from '@nestjs/mapped-types';
import { CreateDongvatDto } from './create-dongvat.dto';

export class UpdateDongvatDto extends PartialType(CreateDongvatDto) {}
