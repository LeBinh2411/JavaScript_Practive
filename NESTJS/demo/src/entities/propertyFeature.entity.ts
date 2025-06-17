import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity() //danh dau class nay la 1 bang trong database
export class PropertyFeature {
  @PrimaryGeneratedColumn() // kho chinh, generated: gia tri tu tang
  id: number;

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;

  @Column()
  parkingSpots: number;

  @Column()
  area: number;

  @Column()
  hasBalcony: boolean;

  @Column()
  hasGardenYard: boolean;

  @Column()
  hasSwimmingPool: boolean;

  @OneToOne(() => Property, (property) => property.propertyFeature)
  @JoinColumn()
  property: Property;
}
