import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class RestaurantMembershipCardLevelReportEntity{

    @PrimaryColumn()
    restaurant_id: number;

    @Column()
    membership_card_id: number;

    @Column()
    color_hex_code : string ; 

    @Column()
    name : string ;
     
    @Column()
    total_customer_member : number ;  

}