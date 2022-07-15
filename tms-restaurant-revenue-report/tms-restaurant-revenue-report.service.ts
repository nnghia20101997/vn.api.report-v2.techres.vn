import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResultOutput } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { Repository } from 'typeorm';
import { TmsCustomerReportEntity } from '../tms-customer-report/tms-customer-report.entity/tms-customer-report.entity';
import { TmsRestaurantRevenueAdjacentReportEntity } from './tms-restaurant-revenue-report.entity/tms-restaurant-revenue-adjacent-report.entity';
import { TmsRestaurantRevenueReportEntity } from './tms-restaurant-revenue-report.entity/tms-restaurant-revenue-report.entity';
import { TmsRestaurantRevenueSamePeriodReportEntity } from './tms-restaurant-revenue-report.entity/tms-restaurant-revenue-same-period.entity';
import { TmsRestaurantRevenueAdjacentReportOutputEntity } from './tms-restaurant-revenue-report.output.entity/tms-restaurant-revenue-adjacent-report.output.entity';
import { TmsRestaurantRevenueReportOutputEntity } from './tms-restaurant-revenue-report.output.entity/tms-restaurant-revenue-report.output.entity';
import { TmsRestaurantRevenueSamePeriodReportOutputEntity } from './tms-restaurant-revenue-report.output.entity/tms-restaurant-revenue-same-period.output.entity';
@Injectable()
export class TmsRestaurantRevenueReportService {
    constructor(
        @InjectRepository(TmsRestaurantRevenueReportEntity)
        private tmsRestaurantRevenueReportEntity: Repository<TmsRestaurantRevenueReportEntity>,
        @InjectRepository(TmsRestaurantRevenueAdjacentReportEntity)
        private tmsRestaurantRevenueAdjacentReportEntity: Repository<TmsRestaurantRevenueAdjacentReportEntity>,
        @InjectRepository(TmsRestaurantRevenueSamePeriodReportEntity)
        private tmsRestaurantRevenueSamePeriodReportEntity: Repository<TmsRestaurantRevenueSamePeriodReportEntity>
    ) {}


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
    async spGTmsRestauranRevenueReport(
        restaurantId : number,
        restaurantBrandId : number,
        branchId : number,
        fromDate : string,
        toDate : string,
        groupType : number
    ) : Promise<StoreProcedureOutputResultInterface<TmsRestaurantRevenueReportEntity, TmsRestaurantRevenueReportOutputEntity>>{

        let result = await this.tmsRestaurantRevenueReportEntity.query(
            "CALL sp_get_rp_restaurant_revenue(?,?,?,?,?,?,@totalRevenue,@status,@message); SELECT @totalRevenue AS total_revenue, @status AS status_code,@message AS message_error",
            [restaurantId, restaurantBrandId, branchId, fromDate, toDate, groupType]
        );
         
        let data: StoreProcedureOutputResultInterface<
            TmsRestaurantRevenueReportEntity, TmsRestaurantRevenueReportOutputEntity
        > = new StoreProcedureResultOutput<TmsRestaurantRevenueReportEntity>().getResultOutputList(result);
    
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
     async spGRPRestaurantRevenueAdjacent(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        fromDate: string,
        toDate: string,
        groupByType: number
    ): Promise<StoreProcedureOutputResultInterface<TmsRestaurantRevenueAdjacentReportEntity, TmsRestaurantRevenueAdjacentReportOutputEntity>>{

        let result = await this.tmsRestaurantRevenueAdjacentReportEntity.query(
            "CALL sp_get_rp_restaurant_revenue_adjacent(?,?,?,?,?,?,@totalRevenue, @totalRevenueAdjacent, @totalRateRevenueAdjacent, @status, @message); SELECT @totalRevenue AS total_revenue, @totalRevenueAdjacent AS total_revenue_adjacent, @totalRateRevenueAdjacent AS total_rate_revenue_adjacent, @status AS status_code, @message AS message_error",
            [restaurantId, restaurantBrandId, branchId,fromDate, toDate, groupByType]
        );

        ExceptionStoreProcedure.validate(result);

        let data: StoreProcedureOutputResultInterface<
            TmsRestaurantRevenueAdjacentReportEntity, TmsRestaurantRevenueAdjacentReportOutputEntity
        > = new StoreProcedureResultOutput<TmsRestaurantRevenueAdjacentReportEntity>().getResultOutputList(result);
        
        return data;
    }

    async spGRPRestaurantRevenueSamePeriod(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        fromDate: string,
        toDate: string,
        groupByType: number
    ): Promise<StoreProcedureOutputResultInterface<TmsRestaurantRevenueSamePeriodReportEntity, TmsRestaurantRevenueSamePeriodReportOutputEntity>> {


        let result = await this.tmsRestaurantRevenueSamePeriodReportEntity.query(
            "CALL sp_get_rp_restaurant_revenue_same_period(?,?,?,?,?,?,@totalRevenue,@totalRevenueSamePeriod,@totalRateRevenueSamePeriod,@status, @message); SELECT @totalRevenue AS total_revenue,@totalRevenueSamePeriod AS total_revenue_same_period,@totalRateRevenueSamePeriod AS total_rate_revenue_same_period ,@status AS status_code, @message AS message_error",
            [restaurantId, restaurantBrandId, branchId,fromDate, toDate, groupByType]
        );

        ExceptionStoreProcedure.validate(result);

        let data: StoreProcedureOutputResultInterface<
            TmsRestaurantRevenueSamePeriodReportEntity, TmsRestaurantRevenueSamePeriodReportOutputEntity
        > = new StoreProcedureResultOutput<TmsRestaurantRevenueSamePeriodReportEntity>().getResultOutputList(result);
        
        return data;
    }

}
