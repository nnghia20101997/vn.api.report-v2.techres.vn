import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { TmsRestaurantRevenueReportEntity } from "../tms-restaurant-revenue-report.entity/tms-restaurant-revenue-report.entity";

export class TmsRestaurantRevenueReportResponse {

    report_time: string;

    restaurant_id: number;

    restaurant_brand_id: number;

    branch_id: number;

    total_revenue: number;

    total_order: number;

    constructor(tmsRestauranRevenue? : TmsRestaurantRevenueReportEntity) {
        this.report_time = tmsRestauranRevenue ? UtilsDate.formatDateTimeVNToStringNoTime(new Date(tmsRestauranRevenue.report_time)) : "";
        this.restaurant_id = tmsRestauranRevenue ? +tmsRestauranRevenue.restaurant_id : 0;
        this.restaurant_brand_id = tmsRestauranRevenue ? +tmsRestauranRevenue.restaurant_brand_id : 0;
        this.branch_id = tmsRestauranRevenue ? +tmsRestauranRevenue.branch_id : 0;
        this.total_revenue = tmsRestauranRevenue ? +tmsRestauranRevenue.total_revenue : 0;
        this.total_order = tmsRestauranRevenue ? +tmsRestauranRevenue.total_order : 0;
    }

    public mapToList(baseEntity: TmsRestaurantRevenueReportEntity[]): TmsRestaurantRevenueReportResponse[] {
        let data: TmsRestaurantRevenueReportResponse[] = [];

        baseEntity.forEach(e => {
            data.push(new TmsRestaurantRevenueReportResponse(e));
        });

        return data;

    }
}