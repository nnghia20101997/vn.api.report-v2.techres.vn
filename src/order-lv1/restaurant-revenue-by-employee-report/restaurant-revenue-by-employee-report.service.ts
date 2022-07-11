import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResultOutput } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common";
import { StoreProcedureOutputResultInterface } from "src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common";
import { Repository } from "typeorm";
import { RestaurantRevenueByEmployeeReportEntity } from "./restaurant-revenue-by-employee-report.entity/restaurant-revenue-by-employee-report.entity";
import { RestaurantRevenueByEmployeeReportOutputEntity } from "./restaurant-revenue-by-employee-report.entity/restaurant-revenue-by-employee-report.output.entity";
@Injectable()
export class RestaurantRevenueByEmployeeReportService {
    constructor(
        @InjectRepository(
            RestaurantRevenueByEmployeeReportEntity
        )
        private restaurantRevenueByEmployeeReportEntity: Repository<RestaurantRevenueByEmployeeReportEntity>
      ) {}
    
      /**
       *@param restaurantId
       * @param restaurantBrandId
       * @param branchId
       * @param fromDateString
       * @param toDateString
       * @returns
       */
    
      async spGetRpRestaurantRevenueByEmployee(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        fromDateString: string,
        toDateString: string
      ): Promise<
        StoreProcedureOutputResultInterface<
        RestaurantRevenueByEmployeeReportEntity,object >
      > {
        let result =
          await this.restaurantRevenueByEmployeeReportEntity.query(
            "CALL sp_get_rp_restaurant_revenue_by_employee(?,?,?,?,?,@total_revenue, @status, @message); SELECT @total_revenue AS total_revenue , @status AS status_code , @message AS message_error",
            [restaurantId, restaurantBrandId, branchId, fromDateString, toDateString]
          );
          ExceptionStoreProcedure.validate(result);
    
        let data: StoreProcedureOutputResultInterface<
        RestaurantRevenueByEmployeeReportEntity,
        RestaurantRevenueByEmployeeReportOutputEntity
        > = new StoreProcedureResultOutput<RestaurantRevenueByEmployeeReportEntity>().getResultOutputList(
          result
        );
    
        return data;
      }

}
