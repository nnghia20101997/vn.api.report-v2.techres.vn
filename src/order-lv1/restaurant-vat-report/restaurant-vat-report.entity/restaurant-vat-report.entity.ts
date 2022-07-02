import { Column, Entity, PrimaryColumn } from "typeorm";



@Entity()
export class RestaurantVatReportEntity {
  
  @PrimaryColumn()
  report_time : string ; 

  @Column()
  restaurant_id: number;

  @Column()
  restaurant_brand_id: number;

  @Column()
  branch_id: number;

  @Column()
  amount: number;
}