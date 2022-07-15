import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { TmsRestaurantSummaryFoodRevenueByTimeReportEntity } from './tms-restaurant-summary-food-revenue-by-time.entity/tms-restaurant-summary-food-revenue-by-time.entity';

@Injectable()
export class TmsRestaurantSummaryFoodRevenueByTimeService {
    constructor(
        @InjectRepository(TmsRestaurantSummaryFoodRevenueByTimeReportEntity)
        private tmsRestaurantSummaryFoodRevenueByTimeReportEntity: Repository<TmsRestaurantSummaryFoodRevenueByTimeReportEntity>,
    ) {}

    async spGRPRestaurantSummaryFoodRevenueByTime(
        restaurantId: number,
        restaurantBrandId: number,
        branchId : number,
        categoryType:number,
        categoryId: number,
        isGift: number,
        isCombo: number,
        isCancelledFood: number,
        isTakeAwayFood: number,
        isGoods: number,
        groupByType: number,
        fromDate : string,
        toDate : string
    ): Promise<TmsRestaurantSummaryFoodRevenueByTimeReportEntity[]>{
        
         console.log(restaurantId,restaurantBrandId,branchId,categoryType,categoryId,isGift,isCombo,isCancelledFood,isTakeAwayFood,isGoods,groupByType,fromDate, toDate);
        

        let result = await this.tmsRestaurantSummaryFoodRevenueByTimeReportEntity.query(
            "CALL sp_get_rp_restaurant_summary_food_revenue_by_time(?,?,?,?,?,?,?,?,?,?,?,?,?, @status, @message); SELECT @status AS status_code, @message AS message_error",
            [restaurantId,restaurantBrandId,branchId,categoryType,categoryId,isGift,isCombo,isCancelledFood,isTakeAwayFood,isGoods,groupByType,fromDate, toDate]
        );
        
        let data: TmsRestaurantSummaryFoodRevenueByTimeReportEntity[] = new StoreProcedureResult<TmsRestaurantSummaryFoodRevenueByTimeReportEntity>().getResultList(result);

        return data;
    }
}
