import { TmsCustomerReportEntity } from "../tms-customer-report.entity/tms-customer-report.entity";

export class TmsCustomeReportResponse {

    report_time: string;

    total_customer_register: number;

    total_customer_save_point: number;

    total_customer_go_to_restaurant: number;

    total_customer_use_point: number;

    total_customer_receiving_gifts: number;

    total_orders: number;

    constructor(tMSCustomerReportEntity? : TmsCustomerReportEntity) {
        this.report_time = tMSCustomerReportEntity ? tMSCustomerReportEntity.report_time : "";
        this.total_customer_register = tMSCustomerReportEntity ? +tMSCustomerReportEntity.total_customer_register : 0;
        this.total_customer_save_point = tMSCustomerReportEntity ? +tMSCustomerReportEntity.total_customer_save_point : 0;
        this.total_customer_go_to_restaurant = tMSCustomerReportEntity ? +tMSCustomerReportEntity.total_customer_go_to_restaurant : 0;
        this.total_customer_use_point = tMSCustomerReportEntity ? +tMSCustomerReportEntity.total_customer_use_point : 0;
        this.total_customer_receiving_gifts = tMSCustomerReportEntity ? +tMSCustomerReportEntity.total_customer_receiving_gifts : 0;
        this.total_orders = tMSCustomerReportEntity ? +tMSCustomerReportEntity.total_orders : 0;
    }

    public mapToList(baseEntities: TmsCustomerReportEntity[]): TmsCustomeReportResponse[] {
        let data: TmsCustomeReportResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new TmsCustomeReportResponse(e));
        });
        return data;
    }
}