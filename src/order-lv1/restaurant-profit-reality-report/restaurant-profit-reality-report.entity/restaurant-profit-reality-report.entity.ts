import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class RestaurantProfitRealityReportEntity{

    @PrimaryColumn()
    restaurant_id: number;

    @Column()
    restaurant_brand_id: number;

    @Column()
    total_revenue : number ; 

    @Column()
    total_cost : number ;
     
    @Column()
    total_profit : number ;  

    @Column()
    total_debt_amount : number ; 

}