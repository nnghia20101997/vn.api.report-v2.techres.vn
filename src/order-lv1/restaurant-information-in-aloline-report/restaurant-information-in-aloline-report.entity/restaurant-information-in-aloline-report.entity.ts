import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class RestaurantInformationInAlolineReportEntity{

    @PrimaryColumn()
    phone: string;

    @Column()
    name : string ;

    @Column()
    email : string ;

    @Column()
    address : string ;

    @Column()
    logo : string ;

    @Column()
    banner : string ;

    @Column()
    average_rate: number;

    @Column()
    rate_count: number;

    @Column()
    customer_members : number ; 

    @Column()
    total_accumulate_point : number ;
     
    @Column()
    used_accumulate_point : number ;

    @Column()
    total_promotion_point : number ;

    @Column()
    used_promotion_point : number ;

    @Column()
    total_alo_point : number ;

    @Column()
    total_amount : number ;

}