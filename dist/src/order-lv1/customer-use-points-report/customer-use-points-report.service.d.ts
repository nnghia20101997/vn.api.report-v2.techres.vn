import { CustomerUsePointsReportEntity } from './customer-use-points-report.entity/customer-use-points-report.entity';
export declare class CustomerUsePointsReportService {
    private customerUsePointsReportEntity;
    spGetRpCustomerUsePoints(restaurantId: number, restaurantBrandId: number, branchId: number, fromDateString: string, toDateString: string, typePoint: number, _limit: number, _offset: number): Promise<CustomerUsePointsReportEntity[]>;
}
