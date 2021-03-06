import { Column, Entity, PrimaryColumn } from "typeorm";



@Entity()
export class RestaurantRevenueDetailByRestaurantBrandReportEntity {
  @PrimaryColumn()
  restaurant_id: number;

  @Column()
  restaurant_brand_id: number;

  @Column({default: ""})
  restaurant_brand_name: string;

  @Column()
  branch_id : number ; 

  @Column({default: ""})
  branch_name: string;

  @Column()
  total_revenue_paid: number;

  @Column()
  total_revenue_in_service: number;

  @Column()
  total_revenue_estimated: number;

}