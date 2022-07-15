import { TmsRestaurantDiscountFromOrderReportEntity } from "../tms-restaurant-discount-from-order.entity/tms-restaurant-discount-from-order.entity";

export class TmsRestaurantDiscountFromOrderReporResponse {
    report_time: string

    total_amount: number;


    constructor(tmsRestaurantDiscountFromOrderReportEntity?: TmsRestaurantDiscountFromOrderReportEntity) {
    
        this.report_time = tmsRestaurantDiscountFromOrderReportEntity? tmsRestaurantDiscountFromOrderReportEntity.report_time : "";
        this.total_amount = tmsRestaurantDiscountFromOrderReportEntity? tmsRestaurantDiscountFromOrderReportEntity.total_amount : 0;
    }

    public mapToList(baseEntities: TmsRestaurantDiscountFromOrderReportEntity[]): TmsRestaurantDiscountFromOrderReporResponse[] {
        let data: TmsRestaurantDiscountFromOrderReporResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new TmsRestaurantDiscountFromOrderReporResponse(e))
        });
        return data;
    }
}