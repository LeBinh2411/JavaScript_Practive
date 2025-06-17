import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tenNguoiDung: string;

  @Column()
  matKhau: string;

  @Column()
  sdt: string;

  @Column({ default: 'nguoidung' })
  role: string;
}
