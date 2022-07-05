import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { CustomerAccumulatePointsReportQueryDTO } from './customer-accumulate-points-report.dto/customer-accumulate-points-report.query.dto';
import { CustomerAccumulatePointsReportEntity } from './customer-accumulate-points-report.entity/customer-accumulate-points-report.entity';
import { CustomerAccumulatePointsReportResponse } from './customer-accumulate-points-report.response/customer-accumulate-points-report.response';
import { CustomerAccumulatePointsReportService } from './customer-accumulate-points-report.service';

@Controller('api/customer-accumulate-points-report')
export class CustomerAccumulatePointsReportController {

    constructor(
        private customerAccumulatePointsReportService: CustomerAccumulatePointsReportService
    ) { }

    @Get("")
    async getRpCustomerAccumulatePoints(@Query() customerAccumulatePointsReportQueryDTO : CustomerAccumulatePointsReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : CustomerAccumulatePointsReportEntity[]= await this.customerAccumulatePointsReportService.spGetRpCustomerAccumulatePoints(
            customerAccumulatePointsReportQueryDTO.restaurant_id ,
            customerAccumulatePointsReportQueryDTO.restaurant_brand_id,
            customerAccumulatePointsReportQueryDTO.branch_id,
            customerAccumulatePointsReportQueryDTO.from_date_string,
            customerAccumulatePointsReportQueryDTO.to_date_string,
            customerAccumulatePointsReportQueryDTO.limit,
            customerAccumulatePointsReportQueryDTO.offset
        );
            response.setData(new CustomerAccumulatePointsReportResponse().mapToList(result));
            return res.status(HttpStatus.OK).send(response);
    }
}
