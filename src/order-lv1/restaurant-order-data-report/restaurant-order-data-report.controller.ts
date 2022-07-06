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
import { RestaurantOrderDataReportQueryDTO } from "./restaurant-order-data-report.dto/restaurant-order-data-report.query.dto";
import { RestaurantOrderDataReportEntity } from "./restaurant-order-data-report.entity/restaurant-order-data-report.entity";
import { RestaurantOrderDataReportResponse } from "./restaurant-order-data-report.response/restaurant-order-data-report.response";
import { RestaurantOrderDataReportService } from "./restaurant-order-data-report.service";

@Controller('api/restaurant-order-data-report')
export class RestaurantOrderDataReportController {
    constructor(
        private restaurantOrderDataReportService: RestaurantOrderDataReportService
    ) {}

    @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async getRpRestaurantOrderData(
    @Query()
    restaurantOrderDataReportQueryDTO: RestaurantOrderDataReportQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let result: StoreProcedureOutputResultInterface<
    RestaurantOrderDataReportEntity,
      any
    > = await this.restaurantOrderDataReportService.spGetRpRestaurantOrderData(
        restaurantOrderDataReportQueryDTO.restaurant_id,
        restaurantOrderDataReportQueryDTO.restaurant_brand_id,
        restaurantOrderDataReportQueryDTO.branch_id,
        restaurantOrderDataReportQueryDTO.employee_id,
        restaurantOrderDataReportQueryDTO.area_id,
        restaurantOrderDataReportQueryDTO.key_word,
        restaurantOrderDataReportQueryDTO.from_date_string,
        restaurantOrderDataReportQueryDTO.to_date_string,
        restaurantOrderDataReportQueryDTO.offset,
        restaurantOrderDataReportQueryDTO.limit
    );
    response.setData(
      new RestaurantOrderDataReportResponse(
        result.list,
        result.output
      )
    );
    return res.status(HttpStatus.OK).send(response);
  }
}
