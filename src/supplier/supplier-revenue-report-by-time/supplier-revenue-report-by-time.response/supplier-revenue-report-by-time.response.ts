import { SupplierRevenueReportEntity } from "../supplier-revenue-report-by-time.entity/supplier-revenue-report-by-time.entity";

export class SupplierRevenueReportByTimeResponse {

    report_time: string;

    supplier_revenue: number;

    supplier_cost: number;

    supplier_profit: number;

    constructor(entity?: SupplierRevenueReportEntity) {
        this.report_time = entity ? entity.report_time : "";
        this.supplier_revenue = entity ? + entity.supplier_revenue : 0;
        this.supplier_cost = entity ? + entity.supplier_cost : 0;
        this.supplier_profit = entity ? + entity.supplier_profit : 0;
    }

    public mapToList(data: SupplierRevenueReportEntity[]) {
        let response: SupplierRevenueReportByTimeResponse[] = [];
        data.forEach((e) => {
            response.push(new SupplierRevenueReportByTimeResponse(e));
        });
        return response;
    }
}
