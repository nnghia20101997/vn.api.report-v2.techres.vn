import { TmsRestaurantSummaryFoodRevenueByTimeReportEntity } from "../tms-restaurant-summary-food-revenue-by-time.entity/tms-restaurant-summary-food-revenue-by-time.entity";

export class TmsRestaurantSummaryFoodRevenueByTimeReportResponse {
   
    report_time: string;

    timestamp: string;

    total_original_amount: number;

    total_amount: number;

    profit: number;

    profit_ratio: number;

    constructor(baseEntity?: TmsRestaurantSummaryFoodRevenueByTimeReportEntity) {
        this.report_time = baseEntity? baseEntity.report_time : "";
        this.timestamp = baseEntity? baseEntity.timestamp : "";
        this.total_original_amount = baseEntity? baseEntity.total_original_amount : 0;
        this.total_amount = baseEntity? baseEntity.total_amount : 0;
        this.profit = baseEntity? baseEntity.profit : 0;
        this.profit_ratio = baseEntity? baseEntity.profit_ratio : 0;
    }

    public mapToList(baseEntities: TmsRestaurantSummaryFoodRevenueByTimeReportEntity[]): TmsRestaurantSummaryFoodRevenueByTimeReportResponse[] {
        let data: TmsRestaurantSummaryFoodRevenueByTimeReportResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new TmsRestaurantSummaryFoodRevenueByTimeReportResponse(e))
        });

        return data;
    }

}