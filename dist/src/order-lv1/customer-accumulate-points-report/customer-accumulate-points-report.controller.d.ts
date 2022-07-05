import { Response } from 'express';
import { CustomerAccumulatePointsReportQueryDTO } from './customer-accumulate-points-report.dto/customer-accumulate-points-report.query.dto';
import { CustomerAccumulatePointsReportService } from './customer-accumulate-points-report.service';
export declare class CustomerAccumulatePointsReportController {
    private customerAccumulatePointsReportService;
    constructor(customerAccumulatePointsReportService: CustomerAccumulatePointsReportService);
    getRpCustomerAccumulatePoints(customerAccumulatePointsReportQueryDTO: CustomerAccumulatePointsReportQueryDTO, res: Response): Promise<any>;
}
