import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { TmsRestaurantRevenueAdjacentReportEntity } from "../tms-restaurant-revenue-report.entity/tms-restaurant-revenue-adjacent-report.entity";
export class TmsRestaurantRevenueAdjacentReportResponse{

    restaurant_id: number;

    restaurant_brand_id: number;

    branch_id: number;

    total_revenue: number;

    report_time: string;

    rate_revenue_adjacent: number;

    report_current_time:string;

    total_current_revenue: number;

    constructor(tmsRestaurantRevenueAdjacentReportEntity?: TmsRestaurantRevenueAdjacentReportEntity) {
        this.restaurant_id = tmsRestaurantRevenueAdjacentReportEntity ? +tmsRestaurantRevenueAdjacentReportEntity.restaurant_id : 0;
        this.restaurant_brand_id = tmsRestaurantRevenueAdjacentReportEntity ? +tmsRestaurantRevenueAdjacentReportEntity.restaurant_brand_id : 0;
        this.branch_id = tmsRestaurantRevenueAdjacentReportEntity ? +tmsRestaurantRevenueAdjacentReportEntity.branch_id : 0;
        this.total_revenue = tmsRestaurantRevenueAdjacentReportEntity ? +tmsRestaurantRevenueAdjacentReportEntity.total_revenue : 0;
        this.report_time = tmsRestaurantRevenueAdjacentReportEntity ? UtilsDate.formatDateTimeVNToStringNoTime(new Date(tmsRestaurantRevenueAdjacentReportEntity.report_time)) : "";
    
        this.rate_revenue_adjacent = tmsRestaurantRevenueAdjacentReportEntity ? +tmsRestaurantRevenueAdjacentReportEntity.rate_revenue_adjacent : 0;
        this.report_current_time = tmsRestaurantRevenueAdjacentReportEntity ? tmsRestaurantRevenueAdjacentReportEntity.report_current_time : "";
        this.total_current_revenue = tmsRestaurantRevenueAdjacentReportEntity ? +tmsRestaurantRevenueAdjacentReportEntity.total_current_revenue : 0;
    
    }

    public mapToList(baseEntity: TmsRestaurantRevenueAdjacentReportEntity[]): TmsRestaurantRevenueAdjacentReportResponse[] {
        let data: TmsRestaurantRevenueAdjacentReportResponse[] = [];

        baseEntity.forEach(e => {
            data.push(new TmsRestaurantRevenueAdjacentReportResponse(e));
        });

        return data;

    }
}