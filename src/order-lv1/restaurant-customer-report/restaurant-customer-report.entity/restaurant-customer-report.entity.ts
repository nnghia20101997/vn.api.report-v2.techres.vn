import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class RestaurantCustomerReportEntity{

    @PrimaryColumn()
    report_time : string ;
     
    @Column()
    total_customer_register : number ;  

    @Column()
    total_customer_save_point : number ; 

    @Column()
    total_customer_go_to_restaurant : number ; 

    @Column()
    total_customer_use_point : number ; 

    @Column()
    total_customer_receiving_gifts : number ; 

    @Column()
    total_orders : number ; 

}