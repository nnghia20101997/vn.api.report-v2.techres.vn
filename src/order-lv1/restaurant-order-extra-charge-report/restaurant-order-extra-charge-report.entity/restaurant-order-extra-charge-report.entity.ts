import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class RestaurantOrderExtraChargeReportEntity{
    
    @PrimaryColumn()
    report_time : string ;

    @Column()
    timestamp: string;
     
    @Column()
    total_amount : number ;  

}