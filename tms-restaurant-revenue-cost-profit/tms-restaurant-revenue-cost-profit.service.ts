import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResultOutput } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { Repository } from 'typeorm';
import { TmsRestaurantRevenueCostProfitEstimateEntity } from './tms-restaurant-revenue-cost-profit.entity/tms-restaurant-revenue-cost-profit-estimate.entity';
import { TmsRestaurantRevenueCostProfitRealityEntity } from './tms-restaurant-revenue-cost-profit.entity/tms-restaurant-revenue-cost-profit-reality.entity';
import { TmsRestaurantRevenueCostProfitEstimateOutputEntity } from './tms-restaurant-revenue-cost-profit.output.entity/tms-restaurant-revenue-cost-profit-estimate.output.entity';
import { TmsRestaurantRevenueCostProfitRealityOutputEntity } from './tms-restaurant-revenue-cost-profit.output.entity/tms-restaurant-revenue-cost-profit-reality.output.entity';

@Injectable()
export class TmsRestaurantRevenueCostProfitService {
    constructor(
        @InjectRepository(TmsRestaurantRevenueCostProfitRealityEntity)
        private tmsRestaurantRevenueCostProfitRealityEntity: Repository<TmsRestaurantRevenueCostProfitRealityEntity>,
        @InjectRepository(TmsRestaurantRevenueCostProfitEstimateEntity)
        private tmsCustomerReportEntity: Repository<TmsRestaurantRevenueCostProfitEstimateEntity>
    ) {}

    async spGRPRestaurantRevenueCostProfitEstimate(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        fromDate: string,
        toDate: string,
        groupType: number
    ): Promise<StoreProcedureOutputResultInterface<TmsRestaurantRevenueCostProfitEstimateEntity, TmsRestaurantRevenueCostProfitEstimateOutputEntity>> {
    
    
        let result = await this.tmsCustomerReportEntity.query(
            "CALL sp_get_rp_restaurant_revenue_cost_profit_estimate(?,?,?,?,?,?,@totalRevenue,@totalCost,@totalProfit,@rateTotalProfit,@status,@message); SELECT @totalRevenue AS total_revenue, @totalCost AS total_cost,@totalProfit AS total_profit,@totalFunds AS total_funds,@rateTotalProfit AS rate_total_profit, @status AS status_code, @message AS message_error",
            [restaurantId,restaurantBrandId,branchId,fromDate,toDate,groupType]
        );

    
        ExceptionStoreProcedure.validate(result);
        
        let data: StoreProcedureOutputResultInterface<
            TmsRestaurantRevenueCostProfitEstimateEntity,TmsRestaurantRevenueCostProfitEstimateOutputEntity
        > = new StoreProcedureResultOutput<TmsRestaurantRevenueCostProfitEstimateEntity>().getResultOutputList(result);
        return data;
    }

     /**
     * 
     * @param restaurantId 
     * @param restaurantBrandId 
     * @param branchId 
     * @param fromDate 
     * @param toDate 
     * @param groupByType 
     * @returns 
     */
      async spGRPRestaurantRevenueCostProfitReality(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        fromDate: string,
        toDate: string,
        groupByType: number
    ): Promise<StoreProcedureOutputResultInterface<TmsRestaurantRevenueCostProfitRealityEntity, TmsRestaurantRevenueCostProfitRealityOutputEntity>>{

        let result = await this.tmsRestaurantRevenueCostProfitRealityEntity.query(
            "CALL sp_get_rp_restaurant_revenue_cost_profit_reality(?,?,?,?,?,?, @totalRevenue, @totalCost, @totalProfit, @rateTotalProfit, @status, @message); SELECT  @totalRevenue AS total_revenue, @totalCost AS total_cost, @totalProfit AS total_profit, @rateTotalProfit AS rate_total_profit, @status AS status_code, @message AS message_error",
            [restaurantId, restaurantBrandId, branchId, fromDate, toDate, groupByType]
        );

        ExceptionStoreProcedure.validate(result);

        let data: StoreProcedureOutputResultInterface<
        TmsRestaurantRevenueCostProfitRealityEntity, 
        TmsRestaurantRevenueCostProfitRealityOutputEntity> = new StoreProcedureResultOutput<TmsRestaurantRevenueCostProfitRealityEntity>().getResultOutputList(result);

        return data;
    }
}
