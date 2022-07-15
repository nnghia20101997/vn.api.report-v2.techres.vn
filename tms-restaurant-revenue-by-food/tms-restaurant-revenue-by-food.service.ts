import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { TmsRestaurantRevenueByFoodReportEntity } from './tms-restaurant-revenue-by-food.entity/tms-restaurant-revenue-by-food.entity';

@Injectable()
export class TmsRestaurantRevenueByFoodService {
    constructor(
        @InjectRepository(TmsRestaurantRevenueByFoodReportEntity)
        private tmsRestaurantRevenueByFoodReportEntity: Repository<TmsRestaurantRevenueByFoodReportEntity>,
    ) {}

    async spGRPRestaurantRevenueByFood(
        restaurantId: number,
        restaurantBrandId: number,
        branchId : number,
        categoryType:string,
        categoryId: number,
        isGift: number,
        isCombo: number,
        isCancelledFood: number,
        isTakeAwayFood: number,
        isGoods: number,
        fromDate : string,
        toDate : string
    ): Promise<TmsRestaurantRevenueByFoodReportEntity[]>{
        
        let result = await this.tmsRestaurantRevenueByFoodReportEntity.query(
            "CALL sp_get_rp_restaurant_revenue_by_food(?,?,?,?,?,?,?,?,?,?,?,?, @status, @message); SELECT @status AS status_code, @message AS message_error",
            [restaurantId,restaurantBrandId,branchId,categoryType,categoryId,isGift,isCombo,isCancelledFood,isTakeAwayFood,isGoods,fromDate, toDate]
        );
        
        let data: TmsRestaurantRevenueByFoodReportEntity[] = new StoreProcedureResult<TmsRestaurantRevenueByFoodReportEntity>().getResultList(result);

        return data;
    }
}
