import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreProcedureResultOutput } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { Repository } from 'typeorm';
import { TmsRestaurantResultBusinessAndProfitAdjacentReportEntity } from './tms-restaurant-result-business-and-profit.entity/tms-restaurant-result-business-and-profit-adjacent.entity';
import { TmsRestaurantResultBusinessAndProfitSamePeriodReportEntity } from './tms-restaurant-result-business-and-profit.entity/tms-restaurant-result-business-and-profit-same-period.entity';
import { TmsRestaurantResultBusinessAndProfitReportEntity } from './tms-restaurant-result-business-and-profit.entity/tms-restaurant-result-business-and-profit.entity';
import { TmsRestaurantResultBusinessAndProfitAdjacentReportOutputEntity } from './tms-restaurant-result-business-and-profit.output.entity/tms-restaurant-result-business-and-profit-adjacent.output.entity';
import { TmsRestaurantResultBusinessAndProfitSamePeriodReportOutputEntity } from './tms-restaurant-result-business-and-profit.output.entity/tms-restaurant-result-business-and-profit-same-period.output.entity';
import { TmsRestaurantResultBusinessAndProfitReportOutputEntity } from './tms-restaurant-result-business-and-profit.output.entity/tms-restaurant-result-business-and-profit.output.entity';

@Injectable()
export class TmsRestaurantResultBusinessAndProfitService {
    constructor(
        @InjectRepository(TmsRestaurantResultBusinessAndProfitReportEntity)
        private tmsRestaurantResultBusinessAndProfitEntity: Repository<TmsRestaurantResultBusinessAndProfitReportEntity>,
    ) {}

    async spGRPRestaurantResultBusinessAndProfit(
        restaurantId : number,
        restaurantBrandId : number,
        branchId : number,
        fromDate : string,
        toDate : string,
        groupType : number
    ) : Promise<StoreProcedureOutputResultInterface<TmsRestaurantResultBusinessAndProfitReportEntity, TmsRestaurantResultBusinessAndProfitReportOutputEntity>>{

        let result = await this.tmsRestaurantResultBusinessAndProfitEntity.query(
            "CALL sp_get_rp_restaurant_result_business_and_profit(?,?,?,?,?,?,@totalProfit,@status,@message); SELECT @totalProfit AS total_profit,@status AS status_code,@message AS message_error",
            [restaurantId, restaurantBrandId, branchId, fromDate, toDate, groupType]
        );
         
        let data: StoreProcedureOutputResultInterface<
            TmsRestaurantResultBusinessAndProfitReportEntity, TmsRestaurantResultBusinessAndProfitReportOutputEntity
        > = new StoreProcedureResultOutput<TmsRestaurantResultBusinessAndProfitReportEntity>().getResultOutputList(result);
    
        return data;
    }
    
    async spGRPRestaurantResultBusinessAndProfitAdjacent(
        restaurantId : number,
        restaurantBrandId : number,
        branchId : number,
        fromDate : string,
        toDate : string,
        groupType : number
    ): Promise<StoreProcedureOutputResultInterface<TmsRestaurantResultBusinessAndProfitAdjacentReportEntity, TmsRestaurantResultBusinessAndProfitAdjacentReportOutputEntity>> {
        
        let result = await this.tmsRestaurantResultBusinessAndProfitEntity.query(
            "CALL sp_get_rp_restaurant_result_business_and_profit_adjacent(?,?,?,?,?,?,@totalProfit,@totalProfitAdjacent,@totalRateProfitAdjacent,@status,@message); SELECT @totalProfit AS total_profit,@totalProfitAdjacent AS total_profit_adjacent,@totalRateProfitAdjacent AS total_rate_profit_adjacent,@status AS status_code,@message AS message_error",
            [restaurantId, restaurantBrandId, branchId, fromDate, toDate, groupType]
        );
         
        let data: StoreProcedureOutputResultInterface<
        TmsRestaurantResultBusinessAndProfitAdjacentReportEntity, TmsRestaurantResultBusinessAndProfitAdjacentReportOutputEntity
        > = new StoreProcedureResultOutput<TmsRestaurantResultBusinessAndProfitAdjacentReportEntity>().getResultOutputList(result);
    
        return data;
        
        
    }

    async spGRPRestaurantResultBusinessAndProfitSamePeriod(
        restaurantId : number,
        restaurantBrandId : number,
        branchId : number,
        fromDate : string,
        toDate : string,
        groupType : number
    ): Promise<StoreProcedureOutputResultInterface<TmsRestaurantResultBusinessAndProfitSamePeriodReportEntity, TmsRestaurantResultBusinessAndProfitSamePeriodReportOutputEntity>> {
        
        let result = await this.tmsRestaurantResultBusinessAndProfitEntity.query(
            "CALL sp_get_rp_restaurant_result_business_and_profit_same_period(?,?,?,?,?,?,@totalProfit,@totalProfitSamePeriod,@totalRateProfitSamePeriod,@status,@message); SELECT @totalProfit AS total_profit,@totalProfitSamePeriod AS total_profit_same_period,@totalRateProfitSamePeriod AS total_rate_profit_same_period,@status AS status_code,@message AS message_error",
            [restaurantId, restaurantBrandId, branchId, fromDate, toDate, groupType]
        );
         
        let data: StoreProcedureOutputResultInterface<
        TmsRestaurantResultBusinessAndProfitSamePeriodReportEntity, TmsRestaurantResultBusinessAndProfitSamePeriodReportOutputEntity
        > = new StoreProcedureResultOutput<TmsRestaurantResultBusinessAndProfitSamePeriodReportEntity>().getResultOutputList(result);
    
        return data;
        
        
    }
    
}
