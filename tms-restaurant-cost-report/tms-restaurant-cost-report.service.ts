import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResultOutput } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { Repository } from 'typeorm';
import { TmsRestaurantCostAdjacentReportEntity } from './tms-restaurant-cost-report.entity/tms-restaurant-cost-adjacent-report.entity';
import { TmsRestaurantCostReportEntity } from './tms-restaurant-cost-report.entity/tms-restaurant-cost-report.entity';
import { TmsRestaurantCostSamePeriodReportEntity } from './tms-restaurant-cost-report.entity/tms-restaurant-cost-same-period-report.entity';
import { TmsRestaurantCostAdjacentReportOutputEntity } from './tms-restaurant-cost-report.output.entity/tms-restaurant-cost-adjacent-report.output.entity';
import { TmsRestaurantCostReportOutputEntity } from './tms-restaurant-cost-report.output.entity/tms-restaurant-cost-report.output.entity';
import { TmsRestaurantCostSamePeriodReportOutputEntity } from './tms-restaurant-cost-report.output.entity/tms-restaurant-cost-same-period-report.output.entity';

@Injectable()
export class TmsRestaurantCostReportService {
    constructor( 
        @InjectRepository(TmsRestaurantCostReportEntity)
        private tmsRestaurantCostReportEntity : Repository<TmsRestaurantCostReportEntity>,
        @InjectRepository(TmsRestaurantCostAdjacentReportEntity)
        private tmsRestaurantCostAdjacentReportEntity: Repository<TmsRestaurantCostAdjacentReportEntity>,
        @InjectRepository(TmsRestaurantCostSamePeriodReportEntity)
        private tmsRestaurantCostSamePeriodReportEntity: Repository<TmsRestaurantCostSamePeriodReportEntity>
    ){} 

    /**
     * 
     * @param restaurant_id 
     * @param restaurant_brand_id 
     * @param branch_id 
     * @param from_date 
     * @param to_date 
     * @param group_type 
     * @returns 
     */
    async spGRRestaurantCost (
        restaurantId : number,
        restaurantBrandId : number,
        branchId : number,
        fromDate : string,
        toDate : string,
        groupType : number
    ) : Promise<StoreProcedureOutputResultInterface<TmsRestaurantCostReportEntity, TmsRestaurantCostReportOutputEntity>> {

        let result = await this.tmsRestaurantCostReportEntity.query(
            "CALL sp_get_rp_restaurant_cost(?,?,?,?,?,?,@totalCost,@status,@message); SELECT @totalCost AS total_cost, @status AS status_code, @message AS message_error",
            [restaurantId, restaurantBrandId, branchId, fromDate, toDate, groupType]
        );

        ExceptionStoreProcedure.validate(result);
        
        let data: StoreProcedureOutputResultInterface<
        TmsRestaurantCostReportEntity, TmsRestaurantCostReportOutputEntity> 
        = new StoreProcedureResultOutput<TmsRestaurantCostReportEntity>().getResultOutputList(result);

        return data;

    }

    async spGRPRestaurantCostSamePeriod(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        fromDate: string,
        toDate: string,
        groupByType: number
    ):Promise<StoreProcedureOutputResultInterface<TmsRestaurantCostSamePeriodReportEntity,TmsRestaurantCostSamePeriodReportOutputEntity>> {
        
        let result = await this.tmsRestaurantCostSamePeriodReportEntity.query(
            "CALL sp_get_rp_restaurant_cost_same_period(?,?,?,?,?,?, @totalCost, @totalCostSamePeriod, @totalRateCostSamePeriod, @status, @message); SELECT @totalCost AS total_cost, @totalCostSamePeriod AS total_cost_same_period, @totalRateCostSamePeriod AS total_rate_cost_same_period, @status AS status_code, @message AS message_error",
            [restaurantId, restaurantBrandId, branchId, fromDate, toDate, groupByType]
        );
        
        ExceptionStoreProcedure.validate(result);

        let data: StoreProcedureOutputResultInterface<
            TmsRestaurantCostSamePeriodReportEntity,TmsRestaurantCostSamePeriodReportOutputEntity
        > = new StoreProcedureResultOutput<TmsRestaurantCostSamePeriodReportEntity>().getResultOutputList(result);
                    
        return data;
    }

    async spGRPRestaurantCostAdjacent(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        fromDate: string,
        toDate: string,
        groupByType: number,
    ): Promise<StoreProcedureOutputResultInterface<TmsRestaurantCostAdjacentReportEntity, TmsRestaurantCostAdjacentReportOutputEntity>> {

        let result = await this.tmsRestaurantCostAdjacentReportEntity.query(
            "CALL sp_get_rp_restaurant_cost_adjacent(?,?,?,?,?,?,@totalCost,@totalCostAdjacent, @totalRateCostAdjacent,@status, @message); SELECT @totalCost AS total_cost,@totalCostAdjacent AS total_cost_adjacent, @totalRateCostAdjacent AS total_rate_cost_adjacent, @status AS status_code, @message AS message_error",
            [restaurantId, restaurantBrandId, branchId, fromDate, toDate, groupByType]
        );

        ExceptionStoreProcedure.validate(result);

        let data: StoreProcedureOutputResultInterface<
            TmsRestaurantCostAdjacentReportEntity, TmsRestaurantCostAdjacentReportOutputEntity
        > = new StoreProcedureResultOutput<TmsRestaurantCostAdjacentReportEntity>().getResultOutputList(result);
        
        return data
    }
}
