import { SupplierOrderListReportEntity } from "../supplier-order-list-report.entity/supplier-order-list-report.entity";
import { SupplierOrderListReportResponse } from "./supplier-order-list-report.response";

export class SupplierOrderTotalRecordReportResponse {

  total_record: number;

  limit: number;

  data: Array<SupplierOrderListReportResponse>;

  constructor(totalRecord: number, limit: number, data: Array<SupplierOrderListReportResponse>) {
    this.total_record = totalRecord;
    this.limit = limit;
    this.data = data
  }

}
