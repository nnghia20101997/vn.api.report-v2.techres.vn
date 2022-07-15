import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { TmsRestaurantOrderExtraChargeReportEntity } from './tms-restaurant-order-extra-charge.entity/tms-restaurant-order-extra-charge.entity';

@Injectable()
export class TmsRestaurantOrderExtraChargeService {
    constructor(
        @InjectRepository(TmsRestaurantOrderExtraChargeReportEntity)
        private tmsRestaurantOrderExtraChargeReportEntity: Repository<TmsRestaurantOrderExtraChargeReportEntity>,
    ) {}

    async spGRPRestaurantOrderExtraCharge(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        groupByType: number,
        fromDate: string,
        toDate: string
    ): Promise<TmsRestaurantOrderExtraChargeReportEntity[]>{
        
        let result = await this.tmsRestaurantOrderExtraChargeReportEntity.query(
            "CALL sp_get_rp_restaurant_order_extra_charge(?,?,?,?,?,?, @status, @message); SELECT @status AS status_code, @message AS message_error",
            [restaurantId,restaurantBrandId,branchId,groupByType,fromDate, toDate]
        );
        
        let data: TmsRestaurantOrderExtraChargeReportEntity[] = new StoreProcedureResult<TmsRestaurantOrderExtraChargeReportEntity>().getResultList(result);

        return data;
    }
}
