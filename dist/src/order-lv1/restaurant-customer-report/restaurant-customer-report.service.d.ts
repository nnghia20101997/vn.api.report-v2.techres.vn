import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { Repository } from 'typeorm';
import { RestaurantCustomerReportEntity } from './restaurant-customer-report.entity/restaurant-customer-report.entity';
export declare class RestaurantCustomerReportService {
    private restaurantCustomerReportEntity;
    constructor(restaurantCustomerReportEntity: Repository<RestaurantCustomerReportEntity>);
    spGetRpRestaurantCustomer(restaurantId: number, restaurantBrandId: number, branchId: number, fromDateString: string, toDateString: string, groupByType: number): Promise<StoreProcedureOutputResultInterface<RestaurantCustomerReportEntity, object>>;
}
