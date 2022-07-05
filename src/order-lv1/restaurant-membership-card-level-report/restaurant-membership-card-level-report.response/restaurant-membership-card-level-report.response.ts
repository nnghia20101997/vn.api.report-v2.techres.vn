import { RestaurantMembershipCardLevelReportEntity } from "../restaurant-membership-card-level-report.entity/restaurant-membership-card-level-report.entity";

export class RestaurantMembershipCardLevelReportResponse{

    restaurant_id: number;

    membership_card_id: number;

    color_hex_code : string ; 

    name : string ;

    total_customer_member : number ;    

    constructor(entity ?: RestaurantMembershipCardLevelReportEntity){
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.membership_card_id = entity ? +entity.membership_card_id : 0 ;
        this.name = entity ? entity.name : "" ;
        this.color_hex_code = entity ? entity.color_hex_code : "" ;
        this.total_customer_member = entity ? +entity.total_customer_member : 0 ;
    }

     public mapToList(data: RestaurantMembershipCardLevelReportEntity[]) {
      let response: RestaurantMembershipCardLevelReportEntity[] = [];
      data.forEach((e) => {
        response.push(new RestaurantMembershipCardLevelReportResponse(e));
      });
      return response;
    }
}