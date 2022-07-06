export class RestaurantBusinessGrowthSummaryReportQueryDTO{

    readonly restaurant_id: number = -1;

    readonly restaurant_brand_id: number = -1;
    
    readonly branch_id: number = -1;

    readonly group_by_type : number = 1 ; 

    readonly from_date_string: string = "";
    
    readonly to_date_string: string = "";

}