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
import { RestaurantOrderDetailByFoodIdReportQueryDTO } from "./restaurant-order-detail-by-food-id-report.dto/restaurant-order-detail-by-food-id-report.query.dto";
import { RestaurantOrderDetailByFoodIdReportEntity } from "./restaurant-order-detail-by-food-id-report.entity/restaurant-order-detail-by-food-id-report.entity";
import { RestaurantOrderDetailByFoodIdReportResponse } from "./restaurant-order-detail-by-food-id-report.response/restaurant-order-detail-by-food-id-report.response";
import { RestaurantOrderDetailByFoodIdReportService } from "./restaurant-order-detail-by-food-id-report.service";
  
@Controller('api/restaurant-order-detail-by-food-id-report')
export class RestaurantOrderDetailByFoodIdReportController {
    constructor(
        private restaurantOrderDetailByFoodIdReportService: RestaurantOrderDetailByFoodIdReportService
    ) {}

    @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async getRpRestaurantOrderDetailByFoodId(
    @Query()
    restaurantOrderDetailByFoodIdReportQueryDTO: RestaurantOrderDetailByFoodIdReportQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let result: StoreProcedureOutputResultInterface<
    RestaurantOrderDetailByFoodIdReportEntity,
      any
    > = await this.restaurantOrderDetailByFoodIdReportService.spGetRpRestaurantOrderDetailByFoodId(
        restaurantOrderDetailByFoodIdReportQueryDTO.restaurant_id,
        restaurantOrderDetailByFoodIdReportQueryDTO.restaurant_brand_id,
        restaurantOrderDetailByFoodIdReportQueryDTO.branch_id,
        restaurantOrderDetailByFoodIdReportQueryDTO.employee_id,
        restaurantOrderDetailByFoodIdReportQueryDTO.food_id,
        restaurantOrderDetailByFoodIdReportQueryDTO.from_date_string,
        restaurantOrderDetailByFoodIdReportQueryDTO.to_date_string,
        restaurantOrderDetailByFoodIdReportQueryDTO.offset,
        restaurantOrderDetailByFoodIdReportQueryDTO.limit
    );
    response.setData(
      new RestaurantOrderDetailByFoodIdReportResponse(
        result.list,
        result.output
      )
    );

    return res.status(HttpStatus.OK).send(response);
  }
}
