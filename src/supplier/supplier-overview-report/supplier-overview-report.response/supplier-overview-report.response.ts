import { SupplierOverviewReportEntity } from "../supplier-overview-report.entity/supplier-overview-report.entity";

export class SupplierOverviewReportResponse {
  supplier_id: number;

  total_order: number;

  order_delivered: number;

  order_not_delivered: number;

  order_processing: number;

  order_return: number;

  total_order_complete_amount: number;

  total_payment_amount: number;

  total_order_amount: number;

  debt_amount: number;

  waiting_confirm: number;

  constructor(supplierOverviewReportEntity?: SupplierOverviewReportEntity) {
    this.supplier_id = supplierOverviewReportEntity
      ? +supplierOverviewReportEntity.supplier_id
      : 0;
    this.total_order = supplierOverviewReportEntity
      ? +supplierOverviewReportEntity.total_order
      : 0;
    this.order_delivered = supplierOverviewReportEntity
      ? +supplierOverviewReportEntity.order_delivered
      : 0;
    this.order_not_delivered = supplierOverviewReportEntity
      ? +supplierOverviewReportEntity.order_not_delivered
      : 0;
    this.order_processing = supplierOverviewReportEntity
      ? +supplierOverviewReportEntity.order_processing
      : 0;
    this.total_order_complete_amount = supplierOverviewReportEntity
      ? +supplierOverviewReportEntity.total_order_complete_amount
      : 0;
    this.total_payment_amount = supplierOverviewReportEntity
      ? +supplierOverviewReportEntity.total_payment_amount
      : 0;
    this.total_order_amount = supplierOverviewReportEntity
      ? +supplierOverviewReportEntity.total_order_amount
      : 0;
    this.debt_amount = supplierOverviewReportEntity
      ? +supplierOverviewReportEntity.debt_amount
      : 0;
    this.waiting_confirm = supplierOverviewReportEntity
      ? +supplierOverviewReportEntity.waiting_confirm
      : 0;
  }

  public mapToList(data: SupplierOverviewReportEntity[]) {
    let response: SupplierOverviewReportResponse[] = [];
    data.forEach((e) => {
      response.push(new SupplierOverviewReportResponse(e));
    });
    return response;
  }
}
