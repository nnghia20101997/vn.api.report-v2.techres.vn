import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { Repository } from 'typeorm';
import { RestaurantCashDetailReportEntity } from './restaurant-cash-detail-report.entity/restaurant-cash-detail-report.entity';
export declare class RestaurantCashDetailReportService {
    private restaurantCashDetailReportEntity;
    constructor(restaurantCashDetailReportEntity: Repository<RestaurantCashDetailReportEntity>);
    spGetRpRestaurantCashDetail(restaurantId: number, restaurantBrandId: number, branchId: number, keyWord: string, _type: number, fromDateString: string, toDateString: string, _offset: number, _limit: number): Promise<StoreProcedureOutputResultInterface<RestaurantCashDetailReportEntity, object>>;
}
