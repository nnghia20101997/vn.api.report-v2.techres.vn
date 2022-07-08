import { IsInt, IsString } from "class-validator";

export class SupplierOrderListReportQueryDto {

  readonly supplier_id: number = -1;

  readonly from_date: string = "";

  readonly to_date: string = "";

  readonly key_search: string = "";

  readonly limit: number = 50;

  readonly page: number = 1;
}
