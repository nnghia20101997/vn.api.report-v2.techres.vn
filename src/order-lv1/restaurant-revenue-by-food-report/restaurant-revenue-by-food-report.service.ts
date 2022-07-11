import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantRevenueByFoodReportEntity } from './restaurant-revenue-by-food-report.entity/restaurant-revenue-by-food-report.entity';
@Injectable()
export class RestaurantRevenueByFoodReportService {

    @InjectRepository(RestaurantRevenueByFoodReportEntity)
    private restaurantRevenueByFoodReportEntity: Repository<RestaurantRevenueByFoodReportEntity>


    /**
  * @param restaurantId
  * @param restaurantBrandId
  * @param branchId
  * @param categoryTypeString
  * @param categoryId
  * @param isGift
  * @param isCombo
  * @param isCancelledFood
  * @param isTakeAwayFood
  * @param isGoods
  * @param fromDateString
  * @param toDateString
  * @returns
  */
    async spGetRpRestaurantRevenueByFood(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        categoryTypeString: string,
        categoryId: number,
        isGift: number,
        isCombo: number,
        isCancelledFood: number,
        isTakeAwayFood: number,
        isGoods: number,
        fromDateString: string,
        toDateString: string

    ): Promise<RestaurantRevenueByFoodReportEntity[]> {
        let result = await this.restaurantRevenueByFoodReportEntity.query('CALL sp_get_rp_restaurant_revenue_by_food(?,?,?,?,?,?,?,?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
            [
                restaurantId,
                restaurantBrandId,
                branchId,
                categoryTypeString,
                categoryId,
                isGift,
                isCombo,
                isCancelledFood,
                isTakeAwayFood,
                isGoods,
                fromDateString,
                toDateString

            ]);
        ExceptionStoreProcedure.validate(result);
        let data: RestaurantRevenueByFoodReportEntity[] = new StoreProcedureResult<RestaurantRevenueByFoodReportEntity>().getResultList(result)
        return data;
    }
}
