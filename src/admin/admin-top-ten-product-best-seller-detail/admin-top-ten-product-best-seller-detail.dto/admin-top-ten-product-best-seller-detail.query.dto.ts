import {
  IsNotEmpty,
  IsNotEmptyString,
} from "src/utils.common/utils.decorator.common/utils.decorator.common";

export class AdminTopTenProductBestSellerDetailQueryDTO {
  @IsNotEmptyString()
  readonly from_date: string = "";
  @IsNotEmptyString()
  readonly to_date: string = "";
  @IsNotEmpty()
  readonly _offset: number = 0;
  @IsNotEmpty()
  readonly _limit: number = 500;
}
