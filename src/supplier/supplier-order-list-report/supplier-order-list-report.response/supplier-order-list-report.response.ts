import { SupplierOrderListReportEntity } from "../supplier-order-list-report.entity/supplier-order-list-report.entity";

export class SupplierOrderListReportResponse {
    id: number;

    supplier_id: number;

    is_order: number;

    restaurant_id: number;

    restaurant_name: string;

    branch_id: number;

    branch_name: string;

    total_material: number;

    total_vat_amount: number;

    total_discount_amount: number;

    total_amount: number;

    order_status: number;

    delivery_time: string;

  constructor(entity?: SupplierOrderListReportEntity) {
    this.id = entity ? + entity.id : 0;
    this.supplier_id = entity ? + entity.supplier_id : 0;
    this.is_order = entity ? + entity.is_order : 0;
    this.restaurant_id = entity ? + entity.restaurant_id : 0;
    this.restaurant_name = entity ? entity.restaurant_name : "";
    this.branch_id = entity ? + entity.branch_id : 0;
    this.branch_name = entity ? entity.branch_name : "";
    this.total_material = entity ? + entity.total_material : 0;
    this.total_vat_amount = entity ? + entity.total_vat_amount : 0;
    this.total_discount_amount = entity ? + entity.total_discount_amount : 0;
    this.total_amount = entity ? + entity.total_amount : 0;
    this.order_status = entity ? + entity.order_status : 0;
    this.delivery_time = entity ? entity.delivery_time : "";
  }

  public mapToList(data: SupplierOrderListReportEntity[]) {
    let response: SupplierOrderListReportResponse[] = [];
    data.forEach((e) => {
      response.push(new SupplierOrderListReportResponse(e));
    });
    return response;
  }
}
