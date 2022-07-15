import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { TmsRestaurantTotalRevenueFoodByInventoryReportEntity } from './tms-restaurant-total-revenue-food-by-inventory.entity/tms-restaurant-total-revenue-food-by-inventory.entity';

@Injectable()
export class TmsRestaurantTotalRevenueFoodByInventoryService {
    constructor(
        @InjectRepository(TmsRestaurantTotalRevenueFoodByInventoryReportEntity)
        private tmsRestaurantTotalRevenueFoodByInventoryReportEntity: Repository<TmsRestaurantTotalRevenueFoodByInventoryReportEntity>,
    ) {}

    async spGRPRestaurantTotalRevenueFoodByInventory(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        fromDate: string,
        toDate: string
    ): Promise<TmsRestaurantTotalRevenueFoodByInventoryReportEntity[]>{
        
        let result = await this.tmsRestaurantTotalRevenueFoodByInventoryReportEntity.query(
            "CALL sp_get_rp_restaurant_total_revenue_food_by_inventory(?,?,?,?,?, @status, @message); SELECT @status AS status_code, @message AS message_error",
            [restaurantId,restaurantBrandId,branchId,fromDate, toDate]
        );
        
        let data: TmsRestaurantTotalRevenueFoodByInventoryReportEntity[] = new StoreProcedureResult<TmsRestaurantTotalRevenueFoodByInventoryReportEntity>().getResultList(result);

        return data;
    }
}
