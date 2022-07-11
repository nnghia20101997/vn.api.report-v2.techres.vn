import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantDetailFoodReportEntity } from './restaurant-detail-food-report.entity/restaurant-detail-food-report.entity';

@Injectable()
export class RestaurantDetailFoodReportService {

    @InjectRepository(RestaurantDetailFoodReportEntity)
    private restaurantDetailFoodReportEntity: Repository<RestaurantDetailFoodReportEntity>


    /**
  * @param restaurantId
  * @param restaurantBrandId
  * @param branchId
  * @param type
  * @param fromDateString
  * @param toDateString
  * @returns
  */
    async spGetRpRestaurantDetailFood(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        type : number ,
        fromDateString: string,
        toDateString: string

    ): Promise<RestaurantDetailFoodReportEntity[]> {
        let result = await this.restaurantDetailFoodReportEntity.query('CALL sp_get_rp_restaurant_detail_food(?,?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
            [
                restaurantId,
                restaurantBrandId,
                branchId,
                type,
                fromDateString,
                toDateString

            ]);
        ExceptionStoreProcedure.validate(result);
        let data: RestaurantDetailFoodReportEntity[] = new StoreProcedureResult<RestaurantDetailFoodReportEntity>().getResultList(result)
        return data;
    }
}
