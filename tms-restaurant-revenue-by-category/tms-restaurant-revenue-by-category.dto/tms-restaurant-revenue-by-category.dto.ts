export class TmsRestaurantRevenueByCategoryReportDto {
    readonly restaurant_id: number;
    readonly restaurant_brand_id: number = -1;
    readonly branch_id: number = -1;
    readonly report_type: number;  
    readonly category_type: number;  
}