import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { CustomerUsePointsReportQueryDTO } from './customer-use-points-report.dto/customer-use-points-report.query.dto';
import { CustomerUsePointsReportEntity } from './customer-use-points-report.entity/customer-use-points-report.entity';
import { CustomerUsePointsReportResponse } from './customer-use-points-report.response/customer-use-points-report.response';
import { CustomerUsePointsReportService } from './customer-use-points-report.service';

@Controller('api/customer-use-points-report')
export class CustomerUsePointsReportController {
    constructor(
        private customerUsePointsReportService: CustomerUsePointsReportService
    ) { }

    @Get("")
    async getRpCustomerUsePoints(@Query() customerUsePointsReportQueryDTO : CustomerUsePointsReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : CustomerUsePointsReportEntity[]= await this.customerUsePointsReportService.spGetRpCustomerUsePoints(
            customerUsePointsReportQueryDTO.restaurant_id ,
            customerUsePointsReportQueryDTO.restaurant_brand_id,
            customerUsePointsReportQueryDTO.branch_id,
            customerUsePointsReportQueryDTO.from_date_string,
            customerUsePointsReportQueryDTO.to_date_string,
            customerUsePointsReportQueryDTO.type_point,
            customerUsePointsReportQueryDTO.limit,
            customerUsePointsReportQueryDTO.offset
        );
            response.setData(new CustomerUsePointsReportResponse().mapToList(result));
            return res.status(HttpStatus.OK).send(response);
    }

}
