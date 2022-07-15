import { TmsRestaurantRevenueDetailByRestaurantBrandReportEntity } from "../tms-restaurant-revenue-detail-by-restaurant-brand.entity/tms-restaurant-revenue-detail-by-restaurant-brand.entity";

export class TmsRestaurantRevenueDetailByRestaurantBrandReportResponse {
   
    restaurant_id: number;

    restaurant_brand_id: number;

    restaurant_brand_name: string;

    branch_id: number;

    branch_name: string;

    total_revenue_paid: number;

    total_revenue_in_service: number;

    total_revenue_estimated: number;

    constructor(tmsRestaurantRevenueDetailByRestaurantBrandReportEntity?: TmsRestaurantRevenueDetailByRestaurantBrandReportEntity) {
        this.restaurant_id = tmsRestaurantRevenueDetailByRestaurantBrandReportEntity? +tmsRestaurantRevenueDetailByRestaurantBrandReportEntity.restaurant_id : 0;
        this.restaurant_brand_id = tmsRestaurantRevenueDetailByRestaurantBrandReportEntity? +tmsRestaurantRevenueDetailByRestaurantBrandReportEntity.restaurant_brand_id : 0;
        this.restaurant_brand_name = tmsRestaurantRevenueDetailByRestaurantBrandReportEntity? tmsRestaurantRevenueDetailByRestaurantBrandReportEntity.restaurant_brand_name : "";
        this.branch_id = tmsRestaurantRevenueDetailByRestaurantBrandReportEntity? +tmsRestaurantRevenueDetailByRestaurantBrandReportEntity.branch_id : 0;
        this.branch_name = tmsRestaurantRevenueDetailByRestaurantBrandReportEntity? tmsRestaurantRevenueDetailByRestaurantBrandReportEntity.branch_name : "";
        this.total_revenue_paid = tmsRestaurantRevenueDetailByRestaurantBrandReportEntity? +tmsRestaurantRevenueDetailByRestaurantBrandReportEntity.total_revenue_paid : 0;
        this.total_revenue_in_service = tmsRestaurantRevenueDetailByRestaurantBrandReportEntity? +tmsRestaurantRevenueDetailByRestaurantBrandReportEntity.total_revenue_in_service : 0;
        this.total_revenue_estimated = tmsRestaurantRevenueDetailByRestaurantBrandReportEntity? +tmsRestaurantRevenueDetailByRestaurantBrandReportEntity.total_revenue_estimated : 0;

    }

    public mapToList(baseEntities: TmsRestaurantRevenueDetailByRestaurantBrandReportEntity[]): TmsRestaurantRevenueDetailByRestaurantBrandReportResponse[] {
        let data: TmsRestaurantRevenueDetailByRestaurantBrandReportResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new TmsRestaurantRevenueDetailByRestaurantBrandReportResponse(e))
        })

        return data;
    }



}