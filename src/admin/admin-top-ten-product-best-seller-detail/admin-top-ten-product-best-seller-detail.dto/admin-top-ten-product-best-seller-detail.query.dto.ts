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
  readonly page: number = 1;
  @IsNotEmpty()
  readonly limit: number = 500;
}
