import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class RestaurantOrderDataReportEntity{
    
    @PrimaryColumn()
    id : number ;

    @Column()
    restaurant_id : number ; 
    
    @Column()
    restaurant_brand_id : number ; 

    @Column()
    area_id : number ; 

    @Column()
    employee_id : number ; 

    @Column()
    table_id : number ; 

    @Column()
    table_merging_ids: string;

    @Column()
    table_merging_names: string;

    @Column()
    move_from_table_name: string;

    @Column()
    customer_slot_number : number ; 

    @Column()
    vat : number ; 

    @Column()
    vat_amount : number ; 

    @Column()
    cash_amount : number ; 

    @Column()
    transfer_amount : number ; 

    @Column()
    bank_amount : number ; 

    @Column()
    total_amount : number ; 

    @Column()
    discount_amount : number ; 

    @Column()
    created_at: string;

    @Column()
    used_time: string;

    @Column()
    table_name: string;

    @Column()
    employee_full_name: string;
}