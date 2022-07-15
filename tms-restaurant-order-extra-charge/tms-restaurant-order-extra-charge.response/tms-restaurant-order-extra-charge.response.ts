import { TmsRestaurantOrderExtraChargeReportEntity } from "../tms-restaurant-order-extra-charge.entity/tms-restaurant-order-extra-charge.entity";

export class TmsRestaurantOrderExtraChargeReportResponse {

    report_time: string;

    timestamp: string;
    
    total_amount: number;

    constructor(baseEntity?: TmsRestaurantOrderExtraChargeReportEntity) {
        this.report_time = baseEntity? baseEntity.report_time : "";
        this.timestamp = baseEntity? baseEntity.timestamp : "";
        this.total_amount = baseEntity? +baseEntity.total_amount : 0;
    }

    public mapToList(baseEntities: TmsRestaurantOrderExtraChargeReportEntity[]): TmsRestaurantOrderExtraChargeReportResponse[]{
        let data: TmsRestaurantOrderExtraChargeReportResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new TmsRestaurantOrderExtraChargeReportResponse(e))
        });

        return data;
    }
}