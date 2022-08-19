export class CustomerUsePointsReportQueryDTO{

    readonly restaurant_id: number = -1;

    readonly restaurant_brand_id: number = -1;
    
    readonly branch_id: number = -1;

    readonly type_point : number = -1 ; 

    readonly from_date_string: string = "";
    
    readonly to_date_string: string = "";

    readonly limit : number = 0 ;

    readonly offset : number = 0 ;

}