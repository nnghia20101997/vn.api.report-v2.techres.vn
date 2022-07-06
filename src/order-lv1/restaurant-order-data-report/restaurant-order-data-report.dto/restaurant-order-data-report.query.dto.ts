export class RestaurantOrderDataReportQueryDTO{

    readonly restaurant_id: number = -1;

    readonly restaurant_brand_id: number = -1;
    
    readonly branch_id: number = -1;

    readonly employee_id : number = -1 ; 

    readonly area_id : number = -1 ;

    readonly key_word : string = "" ;

    readonly from_date_string: string = "";
    
    readonly to_date_string: string = "";

    readonly offset : number = 0 ; 

    readonly limit : number = 100 ;

}