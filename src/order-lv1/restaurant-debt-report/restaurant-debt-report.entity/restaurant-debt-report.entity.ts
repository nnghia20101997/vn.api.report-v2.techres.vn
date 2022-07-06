import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class RestaurantDebtReportEntity{

    @PrimaryColumn()
    id : number ;
     
    @Column()
    count : number ;  

    @Column()
    total_amount : number ; 

    @Column()
    waiting_payment_count : number ; 

    @Column()
    waiting_payment_amount : number ; 

    @Column()
    paid_count : number ; 

    @Column()
    paid_amount : number ; 

    @Column()
    debt_count : number ; 

    @Column()
    debt_amount : number ;
    
    @Column()
    return_count : number ;

    @Column()
    total_return_amount : number ;

    
}