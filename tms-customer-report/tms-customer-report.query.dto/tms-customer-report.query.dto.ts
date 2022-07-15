import { IsInt, IsString } from "class-validator";

export class TmsCustomerReportQueryDto {

    readonly restaurant_id: number = -1;

    readonly restaurant_brand_id: number = -1;

    readonly branch_id: number = -1;

    readonly report_type: number = -1;
}
