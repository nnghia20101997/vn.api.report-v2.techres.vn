import { TmsCustomerReportEntity } from "../tms-customer-report.entity/tms-customer-report.entity";
import { TmsCustomerReportOutputEntity } from "../tms-customer-report.entity/tms-customer-report.output.entity";
import { TmsCustomeReportResponse } from "./tms-customer-report.response";

export class TmsCustomeReportDataResponse {

    list: TmsCustomeReportResponse[];

    total_customer_go_to_restaurant :number;
    total_customer_register :number;
    total_customer_save_point :number;
    total_customer_use_point :number;
    total_customer_receiving_gifts :number;
    total_orders :number;

    constructor(tmsCustomerReports?: TmsCustomerReportEntity[],output?:TmsCustomerReportOutputEntity){
        this.list = tmsCustomerReports ? new TmsCustomeReportResponse().mapToList(tmsCustomerReports) : [];
        this.total_customer_go_to_restaurant = output? +output.total_customer_go_to_restaurant : 0;  
        this.total_customer_register = output? +output.total_customer_register : 0;  
        this.total_customer_save_point = output? +output.total_customer_save_point : 0;  
        this.total_customer_use_point = output? +output.total_customer_use_point : 0;  
        this.total_customer_receiving_gifts = output? +output.total_customer_receiving_gifts : 0;  
        this.total_orders = output? +output.total_orders : 0;  
    } 
}
