import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class CustomerAccumulatePointsReportEntity{

    @PrimaryColumn()
    customer_id : number ;
     
    @Column()
    nick_name : string ;  

    @Column()
    first_name : string ; 

    @Column()
    last_name : string ; 

    @Column()
    name : string ; 

    @Column()
    prefix : string ; 

    @Column()
    normalize_name : string ; 

    @Column()
    email : string ; 

    @Column()
    avatar : string ; 

    @Column()
    phone : string ; 

    @Column()
    gender : number ; 

    @Column()
    birthday : string ; 

    @Column()
    address_full_text : string ;

    @Column()
    created_at : string ; 

    @Column()
    accumulate_point : number ; 

}