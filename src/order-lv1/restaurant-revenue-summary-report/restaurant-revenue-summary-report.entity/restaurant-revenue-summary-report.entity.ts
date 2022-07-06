import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class RestaurantRevenueSummaryReportEntity{

    @PrimaryColumn()
    id : number ;

    @Column()
    restaurant_id: number;

    @Column()
    restaurant_brand_id: number;

    @Column()
    branch_id : number ; 

    @Column()
    type: number;

    @Column()
    automatically_generated_type: number;

    @Column()
    is_automatically_generated : number ; 

    @Column()
    addition_fee_reason_type_id: number;

    @Column()
    addition_fee_reason_id : number ; 

    @Column()
    addition_fee_reason_content : string ;
     
    @Column()
    amount : number ; 
    
    @Column()
    total_order : number ; 

}