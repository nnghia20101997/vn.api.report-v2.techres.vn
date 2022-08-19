import {
  Controller,
  Get,
  HttpStatus,
  Query,
  Res,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { Response } from "express";
import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { StoreProcedureOutputResultInterface } from "src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common";
import { RestaurantCashDetailReportQueryDTO } from "./restaurant-cash-detail-report.dto/restaurant-cash-detail-report.query.dto";
import { RestaurantCashDetailReportEntity } from "./restaurant-cash-detail-report.entity/restaurant-cash-detail-report.entity";
import { RestaurantCashDetailReportResponse } from "./restaurant-cash-detail-report.response/restaurant-cash-detail-report.response";
import { RestaurantCashDetailReportService } from './restaurant-cash-detail-report.service';

@Controller('api/restaurant-cash-detail-report')
export class RestaurantCashDetailReportController {
    constructor(
        private restaurantCashDetailReportService: RestaurantCashDetailReportService
    ) {}

    @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async getRpRestaurantCashDetail(
    @Query()
    restaurantCashDetailReportQueryDTO: RestaurantCashDetailReportQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let result: StoreProcedureOutputResultInterface<
    RestaurantCashDetailReportEntity,
      any
    > = await this.restaurantCashDetailReportService.spGetRpRestaurantCashDetail(
        restaurantCashDetailReportQueryDTO.restaurant_id,
        restaurantCashDetailReportQueryDTO.restaurant_brand_id,
        restaurantCashDetailReportQueryDTO.branch_id,
        restaurantCashDetailReportQueryDTO.key_word,
        restaurantCashDetailReportQueryDTO.type,
        restaurantCashDetailReportQueryDTO.from_date_string,
        restaurantCashDetailReportQueryDTO.to_date_string,
        restaurantCashDetailReportQueryDTO.offset,
        restaurantCashDetailReportQueryDTO.limit
    );
    response.setData(
      new RestaurantCashDetailReportResponse(
        result.list,
        result.output
      )
    );

    return res.status(HttpStatus.OK).send(response);
  }
}
