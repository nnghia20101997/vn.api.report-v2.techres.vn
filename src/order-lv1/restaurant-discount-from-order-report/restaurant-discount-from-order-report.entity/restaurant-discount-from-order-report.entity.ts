import { Column, Entity, PrimaryColumn } from "typeorm";



@Entity()
export class RestaurantDiscountFromOrderReportEntity {
  
  @PrimaryColumn()
  report_time : string ; 

  @Column()
  total_amount: number;

  
}