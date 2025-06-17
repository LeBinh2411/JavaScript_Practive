import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from './property.entity';

import * as bcrypt from 'bcrypt';
import { IsOptional } from 'class-validator';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  // @IsOptional()
  avatarUrl?: string;

  @CreateDateColumn() //dung tu dong ghi lai thoi diem 1 ban ghi duoc tao ra
  createAt: Date;

  @Column({ type: 'varchar', name: 'password', nullable: true })
  password: string;

  @OneToMany(() => Property, (property) => property.user)
  properties: Property[]; //do 1 user chua nhieu property --> kieu du lieu phai la 1 mang

  @ManyToMany(() => Property, (property) => property.likedBy)
  @JoinTable({ name: 'user_liked_properties' }) //Ten cua cot bang phu la ten entity + khoa chinh tunng bang
  likedProperties: Property[];

  @BeforeInsert() // TypeORM se goi lai cac ham duoc danh dau @BeforeInsert() truoc khi luu vao db
  async hastPassword() {
    this.password = await bcrypt.hash(this.password, 10); //await:đợi => bcrypt.hash() chuyen doi mk thanh ma bcrypt, (10: so cang cao bao mat cang manh nhung ton time)==> gian ma brypt cho this.password
  }
}
