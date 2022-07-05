import { Response } from 'express';
import { CustomerUsePointsReportQueryDTO } from './customer-use-points-report.dto/customer-use-points-report.query.dto';
import { CustomerUsePointsReportService } from './customer-use-points-report.service';
export declare class CustomerUsePointsReportController {
    private customerUsePointsReportService;
    constructor(customerUsePointsReportService: CustomerUsePointsReportService);
    getRpCustomerUsePoints(customerUsePointsReportQueryDTO: CustomerUsePointsReportQueryDTO, res: Response): Promise<any>;
}
