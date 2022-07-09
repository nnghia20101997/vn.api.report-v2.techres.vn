import { IsNotEmptyString } from "src/utils.common/utils.decorator.common/utils.decorator.common";

export class AdminGravityProductBestSellerQueryDTO {
  @IsNotEmptyString()
  readonly from_date: string = "";
  @IsNotEmptyString()
  readonly to_date: string = "";
}
