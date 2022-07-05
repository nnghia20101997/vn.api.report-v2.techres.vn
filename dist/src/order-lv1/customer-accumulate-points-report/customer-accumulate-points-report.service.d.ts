import { CustomerAccumulatePointsReportEntity } from './customer-accumulate-points-report.entity/customer-accumulate-points-report.entity';
export declare class CustomerAccumulatePointsReportService {
    private customerAccumulatePointsReportEntity;
    spGetRpCustomerAccumulatePoints(restaurantId: number, restaurantBrandId: number, branchId: number, fromDateString: string, toDateString: string, _limit: number, _offset: number): Promise<CustomerAccumulatePointsReportEntity[]>;
}
