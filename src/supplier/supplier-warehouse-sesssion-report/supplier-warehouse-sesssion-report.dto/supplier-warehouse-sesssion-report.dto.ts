import { IsInt, IsString } from "class-validator";

export class SupplierWarehouseSesssionReportQueryDto {

    readonly supplier_id: number = -1;

    readonly from_date: string = "";

    readonly to_date: string = "";

}
