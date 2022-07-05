import { RestaurantInformationInAlolineReportEntity } from "../restaurant-information-in-aloline-report.entity/restaurant-information-in-aloline-report.entity";

export class RestaurantInformationInAlolineReportResponse{

    phone: string;

    name : string ;

    email : string ;

    address : string ;

    logo : string ;

    banner : string ;

    average_rate: number;

    rate_count: number;

    customer_members : number ; 

    total_accumulate_point : number ;
     
    used_accumulate_point : number ;
     
    total_promotion_point : number ;

    used_promotion_point : number ;

    total_alo_point : number ;

    total_amount : number ;

    constructor(entity ?: RestaurantInformationInAlolineReportEntity){
        this.name = entity ? entity.name : "" ;
        this.phone = entity ? entity.phone : "" ;
        this.email = entity ? entity.email : "" ;
        this.address = entity ? entity.address : "" ;
        this.logo = entity ? entity.logo : "" ;
        this.banner = entity ? entity.banner : "" ;
        this.average_rate = entity ? +entity.average_rate : 0;
        this.rate_count = entity ? +entity.rate_count : 0;
        this.customer_members = entity ? +entity.customer_members : 0;
        this.total_accumulate_point = entity ? +entity.total_accumulate_point : 0;
        this.used_accumulate_point = entity ? +entity.used_accumulate_point : 0;
        this.total_promotion_point = entity ? +entity.total_promotion_point : 0;
        this.used_promotion_point = entity ? +entity.used_promotion_point : 0;
        this.total_alo_point = entity ? +entity.total_alo_point : 0;
        this.total_amount = entity ? +entity.total_amount : 0;
       
       
    }

    //  public mapToList(data: RestaurantInformationInAlolineReportEntity[]) {
    //   let response: RestaurantInformationInAlolineReportEntity[] = [];
    //   data.forEach((e) => {
    //     response.push(new RestaurantInformationInAlolineReportResponse(e));
    //   });
    //   return response;
    // }
}