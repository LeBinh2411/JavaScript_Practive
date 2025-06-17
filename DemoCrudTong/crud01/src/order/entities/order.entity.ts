import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

//danh dau class Order la 1 bang trong db va co ten la 'order'
@Entity('order')
export class Order {
  //Khoa chinh, id tu tang, la 1 cot
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  maDon: string;

  @Column()
  soLuong: number;

  @Column()
  gia: number;

  @CreateDateColumn({ type: 'timestamp' })
  ngayTao: Date;

  //join voi bang user
  @ManyToOne(() => User)
  nguoiTao: User; //kieu du lieu la bang User vi day la moi quan he
}
