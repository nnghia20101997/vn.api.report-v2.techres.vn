import { TmsRestaurantRevenueByBrandReportEntity } from "../tms-restaurant-revenue-by-branch.entity/tms-restaurant-revenue-by-branch.entity"

export class TmsRestaurantRevenueByBrandReportResponse {
    branch_id: number;

    restaurant_brand_id: number;

    branch_name: string;

    branch_status: number;

    restaurant_brand_name:string;

    total_revenue_paid: number;

    total_revenue_in_service: number;

    total_revenue_estimated: number;

    constructor(baseEntity?: TmsRestaurantRevenueByBrandReportEntity) {
        this.branch_id = baseEntity? +baseEntity.branch_id : 0;
        this.restaurant_brand_id = baseEntity? +baseEntity.restaurant_brand_id : 0;
        this.branch_name = baseEntity? baseEntity.branch_name : "";
        this.branch_status = baseEntity? +baseEntity.branch_status : 0;
        this.restaurant_brand_name = baseEntity? baseEntity.restaurant_brand_name : "";
        this.total_revenue_paid = baseEntity? +baseEntity.total_revenue_paid : 0;
        this.total_revenue_in_service = baseEntity? +baseEntity.total_revenue_in_service : 0;
        this.total_revenue_estimated = baseEntity? +baseEntity.total_revenue_estimated : 0;
    }

    public mapToList(baseEntities?: TmsRestaurantRevenueByBrandReportEntity[]): TmsRestaurantRevenueByBrandReportResponse[] {
        let data: TmsRestaurantRevenueByBrandReportResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new TmsRestaurantRevenueByBrandReportResponse(e))
        });

        return data;
    }
}