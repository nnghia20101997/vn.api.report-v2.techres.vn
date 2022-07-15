import { TmsRestaurantRevenueByAreaReportEntity } from "../tms-restaurant-revenue-by-area-report.entity/tms-restaurant-revenue-by-area-report.entity";

export class TmsRestaurantRevenueByAreaReportResponse {

    area_id: number;

    area_name: number;

    order_count: number;

    revenue: number;

    constructor(baseEntity?: TmsRestaurantRevenueByAreaReportEntity) {
        this.area_id = baseEntity? +baseEntity.area_id : 0;
        this.area_name = baseEntity? baseEntity.area_name : 0;
        this.order_count = baseEntity? +baseEntity.order_count : 0;
        this.revenue = baseEntity? +baseEntity.revenue : 0;
    }

    public mapToList(baseEntities: TmsRestaurantRevenueByAreaReportEntity[]): TmsRestaurantRevenueByAreaReportResponse[]{
        let data: TmsRestaurantRevenueByAreaReportResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new TmsRestaurantRevenueByAreaReportResponse(e))
        });
        return data;
    }
}