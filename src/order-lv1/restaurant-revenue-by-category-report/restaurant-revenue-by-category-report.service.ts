import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantRevenueByCategoryReportEntity } from './restaurant-revenue-by-category-report.entity/restaurant-revenue-by-category-report.entity';

@Injectable()
export class RestaurantRevenueByCategoryReportService {

    @InjectRepository(RestaurantRevenueByCategoryReportEntity)
    private restaurantRevenueByCategoryReportEntity: Repository<RestaurantRevenueByCategoryReportEntity>


    /**
  *@param restaurantId
  * @param restaurantBrandId
  * @param branchId
  * @param categoryType
  * @param fromDateString
  * @param toDateString
  * @returns
  */
    async spGetRpRestaurantRevenueByCategory(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        categoryType: number,
        fromDateString: string,
        toDateString: string

    ): Promise<RestaurantRevenueByCategoryReportEntity[]> {
        let result = await this.restaurantRevenueByCategoryReportEntity.query('CALL sp_get_rp_restaurant_revenue_by_category(?,?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
            [
                restaurantId,
                restaurantBrandId,
                branchId,
                categoryType,
                fromDateString,
                toDateString

            ]);
        ExceptionStoreProcedure.validate(result);
        let data: RestaurantRevenueByCategoryReportEntity[] = new StoreProcedureResult<RestaurantRevenueByCategoryReportEntity>().getResultList(result)
        return data;
    }
}
