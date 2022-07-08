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
import { RestaurantCustomerReportQueryDTO } from "./restaurant-customer-report.dto/restaurant-customer-report.query.dto";
import { RestaurantCustomerReportEntity } from "./restaurant-customer-report.entity/restaurant-customer-report.entity";
import { RestaurantCustomerReportResponse } from "./restaurant-customer-report.response/restaurant-customer-report.response";
import { RestaurantCustomerReportService } from './restaurant-customer-report.service';

@Controller('api/restaurant-customer-report')
export class RestaurantCustomerReportController {
    constructor(
        private restaurantCustomerReportService: RestaurantCustomerReportService
    ) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async getRpRestaurantCustomer(
    @Query()
    restaurantCustomerReportQueryDTO: RestaurantCustomerReportQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let result: StoreProcedureOutputResultInterface<
    RestaurantCustomerReportEntity,
      any
    > = await this.restaurantCustomerReportService.spGetRpRestaurantCustomer(
      restaurantCustomerReportQueryDTO.restaurant_id,
      restaurantCustomerReportQueryDTO.restaurant_brand_id,
      restaurantCustomerReportQueryDTO.branch_id,
      restaurantCustomerReportQueryDTO.from_date_string,
      restaurantCustomerReportQueryDTO.to_date_string,
      restaurantCustomerReportQueryDTO.group_by_type
    );
    response.setData(
      new RestaurantCustomerReportResponse(
        result.list,
        result.output
      )
    );

    return res.status(HttpStatus.OK).send(response);
  }
}
