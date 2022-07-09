import { IsNotEmptyString } from "src/utils.common/utils.decorator.common/utils.decorator.common";

export class AdminTopBestSalerReportQueryDTO {
    @IsNotEmptyString()
    readonly from_date: string = "";
    @IsNotEmptyString()
    readonly to_date: string = "";

    readonly _offset: number = -1;

    readonly _limit: number = -1;
}