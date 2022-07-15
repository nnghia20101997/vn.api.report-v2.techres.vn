import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { TmsRestaurantDetailFoodReportEntity } from './tms-restaurant-detail-food.entity/tms-restaurant-detail-food.entity';

@Injectable()
export class TmsRestaurantDetailFoodService {
    constructor(
        @InjectRepository(TmsRestaurantDetailFoodReportEntity)
        private tmsRestaurantDetailFoodReportEntity: Repository<TmsRestaurantDetailFoodReportEntity>,
    ) {}

    async spGRPRestaurantDetailFood(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        type: number,
        fromDate: string,
        toDate: string
    ): Promise<TmsRestaurantDetailFoodReportEntity[]>{
        
        let result = await this.tmsRestaurantDetailFoodReportEntity.query(
            "CALL sp_get_rp_restaurant_detail_food(?,?,?,?,?,?, @status, @message); SELECT @status AS status_code, @message AS message_error",
            [restaurantId,restaurantBrandId,branchId,type,fromDate, toDate]
        );
        
        let data: TmsRestaurantDetailFoodReportEntity[] = new StoreProcedureResult<TmsRestaurantDetailFoodReportEntity>().getResultList(result);

        return data;
    }
}
