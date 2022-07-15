import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { StoreProcedureResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-result.interface.common';
import { Repository } from 'typeorm';
import { TmsRestaurantBusinessGrowthReportEntity } from './tms-restaurant-business-growth.entity/tms-restaurant-business-growth.entity';

@Injectable()
export class TmsRestaurantBusinessGrowthService {
    constructor(
        @InjectRepository(TmsRestaurantBusinessGrowthReportEntity)
        private tmsRestaurantBusinessGrowthReportEntity: Repository<TmsRestaurantBusinessGrowthReportEntity>
    ){}

    /**
     * 
     * @param restaurantId 
     * @param restaurantBrandId 
     * @param branchId 
     * @param fromDateString 
     * @param toDateString 
     * @param groupByType 
     */
    async spGRPRestaurantBusinessGrowth(
        restaurantId: number,
	    restaurantBrandId: number,
	    branchId: number,
	    fromDate: string,
	    toDate: string,
	    groupByType: number
    ): Promise<TmsRestaurantBusinessGrowthReportEntity[]> {

        let result = await this.tmsRestaurantBusinessGrowthReportEntity.query(
            "CALL sp_get_rp_restaurant_business_growth(?,?,?,?,?,?, @status,@message); SELECT @status AS status_code, @message AS message_error",
            [restaurantId, restaurantBrandId, branchId, fromDate, toDate, groupByType]
        );
        ExceptionStoreProcedure.validate(result);
        let data: TmsRestaurantBusinessGrowthReportEntity[] = new StoreProcedureResult<TmsRestaurantBusinessGrowthReportEntity>().getResultList(result);

        return data;
    }
}
