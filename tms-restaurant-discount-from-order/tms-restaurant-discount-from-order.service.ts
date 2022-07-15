import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { TmsRestaurantDiscountFromOrderReportEntity } from './tms-restaurant-discount-from-order.entity/tms-restaurant-discount-from-order.entity';

@Injectable()
export class TmsRestaurantDiscountFromOrderService {
    constructor(
        @InjectRepository(TmsRestaurantDiscountFromOrderReportEntity)
        private tmsRestaurantDiscountFromOrderReportEntity: Repository<TmsRestaurantDiscountFromOrderReportEntity>,
    ) {}

    async spGRPRestaurantDiscountFromOrder(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        groupByType: number,
        fromDate: string,
        toDate: string
    ): Promise<TmsRestaurantDiscountFromOrderReportEntity[]>{
        
        let result = await this.tmsRestaurantDiscountFromOrderReportEntity.query(
            "CALL sp_get_rp_restaurant_discount_from_order(?,?,?,?,?,?, @status, @message); SELECT @status AS status_code, @message AS message_error",
            [restaurantId,restaurantBrandId,branchId,groupByType,fromDate, toDate]
        );
        
        let data: TmsRestaurantDiscountFromOrderReportEntity[] = new StoreProcedureResult<TmsRestaurantDiscountFromOrderReportEntity>().getResultList(result);

        return data;
    }
}
