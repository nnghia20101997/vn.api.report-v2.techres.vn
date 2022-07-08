import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class RestaurantResultBusinessAndProfitReportEntity{

    @PrimaryColumn()
    id : number;

    @Column()
    restaurant_id : number ; 

    @Column()
    restaurant_brand_id: number;

    @Column()
    branch_id : number ; 

    @Column()
    report_time : string ;
     
    @Column()
    total_revenue_amount : number ;  

    @Column()
    total_cost_amount : number;

    @Column()
    total_profit_amount : number;

}