export class RestaurantCashDetailReportQueryDTO{

    readonly restaurant_id: number = -1;

    readonly restaurant_brand_id: number = -1;
    
    readonly branch_id: number = -1;

    readonly type : number = -1 ; 

    readonly from_date_string: string = "";
    
    readonly to_date_string: string = "";

    readonly key_word : string = "" ; 

    readonly offset: number = -1;

    readonly limit: number = -1;
}