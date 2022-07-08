import { SupplierRevenueOutputReportByTimeEntity } from "../supplier-revenue-report-by-time.entity/supplier-revenue-output-report-by-time.entity";
import { SupplierRevenueReportEntity } from "../supplier-revenue-report-by-time.entity/supplier-revenue-report-by-time.entity";
import { SupplierRevenueReportByTimeResponse } from "./supplier-revenue-report-by-time.response";

export class SupplierRevenueReportResponse {

    total_revenue: number;

    total_cost: number;

    total_profit: number;

    profit_percent: number;

    data: Array<SupplierRevenueReportByTimeResponse>;

    constructor(output?: SupplierRevenueOutputReportByTimeEntity, list?: Array<SupplierRevenueReportEntity>) {
        this.total_revenue = output ? + output.total_revenue : 0;
        this.total_cost = output ? + output.total_cost : 0;
        this.total_profit = output ? + output.total_profit : 0;
        this.profit_percent = output ? + output.profit_percent : 0;
        this.data = new SupplierRevenueReportByTimeResponse().mapToList(list);
    }

}
