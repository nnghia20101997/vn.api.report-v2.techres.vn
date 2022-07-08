import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class RestaurantRevenueCostSummaryReportEntity{

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
    total_amount : number ;  

    @Column()
    addition_fee_reason_id : number;

    @Column()
    addition_fee_reason_type_id : number;

    @Column()
    addition_fee_reason_content : string ;
     
}