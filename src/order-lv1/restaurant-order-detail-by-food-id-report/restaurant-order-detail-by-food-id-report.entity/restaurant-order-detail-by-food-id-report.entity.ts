import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class RestaurantOrderDetailByFoodIdReportEntity{
    
    @PrimaryColumn()
    id : number ;

    @Column()
    restaurant_id : number ; 
    
    @Column()
    restaurant_brand_id : number ; 

    @Column()
    branch_id : number ; 

    @Column()
    food_id : number ; 

    @Column()
    total_amount : number ; 

    @Column()
    food_name: string;

    @Column()
    employee_id : number ; 

    @Column()
    employee_full_name: string;


}