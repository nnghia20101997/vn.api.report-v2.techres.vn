import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class AdminAdvertisingRevenueDetailDataModelEntity {
  @PrimaryColumn()
  total_price: number;

  @Column({ default: "" })
  report_time: string;

  @Column({ default: 0 })
  media_length_by_second: number;
}
