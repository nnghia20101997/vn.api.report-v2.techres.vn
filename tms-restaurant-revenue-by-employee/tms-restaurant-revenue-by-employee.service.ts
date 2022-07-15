import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreProcedureResultOutput } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { Repository } from 'typeorm';
import { TmsRestaurantRevenueByEmployeeReportEntity } from './tms-restaurant-revenue-by-employee.entity/tms-restaurant-revenue-by-employee.entity';
import { TmsRestaurantRevenueByEmployeeReportOutputEntity } from './tms-restaurant-revenue-by-employee.output.entity/tms-restaurant-revenue-by-employee.output.entity';

@Injectable()
export class TmsRestaurantRevenueByEemployeeService {
    constructor(
        @InjectRepository(TmsRestaurantRevenueByEmployeeReportEntity)
        private tmsRestaurantRevenueByEmployeeReportEntity: Repository<TmsRestaurantRevenueByEmployeeReportEntity>
    ) {}

    async spGRPRestaurantRevenueByEemployee(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        fromDateString: string,
        toDateString: string,

    ): Promise<StoreProcedureOutputResultInterface<TmsRestaurantRevenueByEmployeeReportEntity,TmsRestaurantRevenueByEmployeeReportOutputEntity>> {

        console.log(restaurantId, restaurantBrandId, branchId, fromDateString, toDateString);
        
        
        let result = await this.tmsRestaurantRevenueByEmployeeReportEntity.query(
            "CALL sp_get_rp_restaurant_revenue_by_employee(?,?,?,?,?,@total_revenue, @status, @message); SELECT @total_revenue AS total_revenue,@status AS status_code, @message AS message_error",
            [restaurantId, restaurantBrandId, branchId, fromDateString, toDateString]
        );

        let data: StoreProcedureOutputResultInterface<
            TmsRestaurantRevenueByEmployeeReportEntity,TmsRestaurantRevenueByEmployeeReportOutputEntity
        > = new StoreProcedureResultOutput<TmsRestaurantRevenueByEmployeeReportEntity>().getResultOutputList(result);

        return data;
    }
}
