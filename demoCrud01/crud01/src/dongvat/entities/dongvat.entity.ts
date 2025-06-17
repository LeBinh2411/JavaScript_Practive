import { Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //Danh dau class nay la 1 entity - no se tuong ung voi 1 bang trong database
export class Dongvat {
  @PrimaryGeneratedColumn() //khoa chinh, Generated: gia tri tu tang
  id: number;

  @Column() //dung danh dau 1 thuoc tinh cua class la 1 cot trong database
  ten: string;

  @Column()
  tuoi: number;
}
