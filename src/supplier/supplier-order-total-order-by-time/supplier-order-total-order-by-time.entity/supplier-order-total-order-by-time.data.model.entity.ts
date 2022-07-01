import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class SupplierOrderTotalOrderByTimeDataModelEntity {
  @PrimaryColumn()
  this_week_total_order_amount: number;

  @Column({ default: 0 })
  last_week_total_order_amount: number;

  @Column({ default: 0 })
  this_month_total_order_amount: number;

  @Column({ default: 0 })
  last_month_total_order_amount: number;
}
