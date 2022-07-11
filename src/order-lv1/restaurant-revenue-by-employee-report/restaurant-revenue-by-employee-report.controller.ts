import {Controller,Get,HttpStatus,Query,Res,UsePipes,ValidationPipe,} from "@nestjs/common";
  import { Response } from "express";
  import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
  import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
  import { StoreProcedureOutputResultInterface } from "src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common";
import { RestaurantRevenueByEmployeeReportQueryDTO } from "./restaurant-revenue-by-employee-report.dto/restaurant-revenue-by-employee-report.query.dto";
import { RestaurantRevenueByEmployeeReportEntity } from "./restaurant-revenue-by-employee-report.entity/restaurant-revenue-by-employee-report.entity";
import { RestaurantRevenueByEmployeeReportResponse } from "./restaurant-revenue-by-employee-report.response/restaurant-revenue-by-employee-report.response";
import { RestaurantRevenueByEmployeeReportService } from "./restaurant-revenue-by-employee-report.service";
  

@Controller('api/restaurant-revenue-by-employee-report')
export class RestaurantRevenueByEmployeeReportController {

    constructor(
        private restaurantRevenueByEmployeeReportService: RestaurantRevenueByEmployeeReportService
      ) {}
    
      @Get("")
      @UsePipes(new ValidationPipe({ transform: true }))
      async spGRpSupplierTotalDebtAndDebitListAndPublicCollection(
        @Query()
        restaurantRevenueByEmployeeReportQueryDTO: RestaurantRevenueByEmployeeReportQueryDTO,
        @Res() res: Response
      ): Promise<any> {
        let response: ResponseData = new ResponseData();
    
        let result: StoreProcedureOutputResultInterface<
        RestaurantRevenueByEmployeeReportEntity,
          any
        > = await this.restaurantRevenueByEmployeeReportService.spGetRpRestaurantRevenueByEmployee(
            
            restaurantRevenueByEmployeeReportQueryDTO.restaurant_id,
            restaurantRevenueByEmployeeReportQueryDTO.restaurant_brand_id,
            restaurantRevenueByEmployeeReportQueryDTO.branch_id,
            restaurantRevenueByEmployeeReportQueryDTO.from_date_string,
            restaurantRevenueByEmployeeReportQueryDTO.to_date_string
        
        );
        response.setData(
          new RestaurantRevenueByEmployeeReportResponse(
            result.list,
            result.output
          )
        );
    
        return res.status(HttpStatus.OK).send(response);
      }
}
