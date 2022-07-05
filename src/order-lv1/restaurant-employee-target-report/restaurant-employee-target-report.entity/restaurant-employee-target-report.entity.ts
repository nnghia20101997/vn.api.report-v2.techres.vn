import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class RestaurantEmployeeTargetReportEntity{

    @PrimaryColumn()
    employee_id: number;

    @Column()
    full_name: string;

    @Column()
    restaurant_id: number ;

    @Column()
    restaurant_brand_id: number ;
    
    @Column()
    restaurant_brand_name : string ;

    @Column()
    branch_id : number ; 

    @Column()
    branch_name : string ;
     
    @Column()
    employee_role_name : string ; 

    @Column()
    total_revenue_reality : number ; 

    @Column()
    total_revenue_target : number ;

    @Column()
    ratio : number ;
}