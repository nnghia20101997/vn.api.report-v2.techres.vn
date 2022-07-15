import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { TmsRestaurantRevenueSamePeriodReportEntity } from "../tms-restaurant-revenue-report.entity/tms-restaurant-revenue-same-period.entity";

export class TmsRestaurantRevenueSamePeriodReportResponse {

    restaurant_id: number;

    restaurant_brand_id: number;

    branch_id: number;

    total_revenue: number;

    report_time: string;

    rate_revenue_same_period: number;

    report_current_time: string;

    total_current_revenue: number;

    constructor(tmsRestaurantRevenueSamePeriodReportEntity?: TmsRestaurantRevenueSamePeriodReportEntity) {
        this.restaurant_id = tmsRestaurantRevenueSamePeriodReportEntity? +tmsRestaurantRevenueSamePeriodReportEntity.restaurant_id : 0;
        this.restaurant_brand_id = tmsRestaurantRevenueSamePeriodReportEntity? +tmsRestaurantRevenueSamePeriodReportEntity.restaurant_brand_id : 0;
        this.branch_id = tmsRestaurantRevenueSamePeriodReportEntity? +tmsRestaurantRevenueSamePeriodReportEntity.branch_id : 0;
        this.total_revenue = tmsRestaurantRevenueSamePeriodReportEntity? +tmsRestaurantRevenueSamePeriodReportEntity.total_revenue : 0;
        this.report_time = tmsRestaurantRevenueSamePeriodReportEntity? UtilsDate.formatDateTimeVNToStringNoTime(new Date(tmsRestaurantRevenueSamePeriodReportEntity.report_time)) : "";
    
        this.rate_revenue_same_period = tmsRestaurantRevenueSamePeriodReportEntity? +tmsRestaurantRevenueSamePeriodReportEntity.rate_revenue_same_period : 0;
        this.report_current_time = tmsRestaurantRevenueSamePeriodReportEntity? tmsRestaurantRevenueSamePeriodReportEntity.report_current_time : "";
        this.total_current_revenue = tmsRestaurantRevenueSamePeriodReportEntity? +tmsRestaurantRevenueSamePeriodReportEntity.total_current_revenue : 0;
    }

    public mapToList(baseEntities: TmsRestaurantRevenueSamePeriodReportEntity[]): TmsRestaurantRevenueSamePeriodReportResponse[] {
        let data: TmsRestaurantRevenueSamePeriodReportResponse[] = [];

        baseEntities.forEach(e => {
            data.push(new TmsRestaurantRevenueSamePeriodReportResponse(e));
        });

        return data;
    }
}