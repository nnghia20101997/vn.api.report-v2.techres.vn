import { IsInt, IsString } from "class-validator";

export class SupplierRevenueReportQueryDto {

    readonly supplier_id: number = -1;

    readonly report_type: number = 1;

    readonly from_date: string = "";

    readonly to_date: string = "";

}
