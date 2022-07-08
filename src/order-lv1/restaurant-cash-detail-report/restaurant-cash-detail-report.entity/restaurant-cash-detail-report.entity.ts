import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class RestaurantCashDetailReportEntity{

    @PrimaryColumn()
    id : number;

    @Column()
    restaurant_id : number ; 

    @Column()
    restaurant_brand_id: number;

    @Column()
    branch_id : number ; 
     
    @Column()
    employee_id : number ;  

    @Column()
    code : string;

    @Column()
    type : number;

    @Column()
    employee_full_name : string;

    @Column()
    addition_fee_reason_id : number ;  

    @Column()
    addition_fee_reason_content : string;

    @Column()
    addition_fee_reason_type_id : number ;  

    @Column()
    addition_fee_reason_type_name : string;

    @Column()
    object_name : string;

    @Column()
    amount : number ; 
    
    @Column()
    create_at : string;

    @Column()
    type_name : string;


}