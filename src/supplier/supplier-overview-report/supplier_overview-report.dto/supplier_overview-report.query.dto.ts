import { IsInt, IsString } from "class-validator";

export class SupplierOverviewReportQueryDto {

  readonly supplier_id: number = -1;


  readonly restaurant_id: number = -1;

  readonly branch_id: number = -1;

  readonly from_date: string = "";

  readonly to_date: string = "";
}
