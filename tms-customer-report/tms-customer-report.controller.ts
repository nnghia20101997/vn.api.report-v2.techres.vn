import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { TmsCustomerReportQueryDto } from './tms-customer-report.query.dto/tms-customer-report.query.dto';
import { TmsCustomerReportEntity } from './tms-customer-report.entity/tms-customer-report.entity';
import { TmsCustomerReportService } from './tms-customer-report.service';
import { TmsCustomeReportDataResponse } from './tms-customer-report.response/tms-customer-report.data.response';
import { TmsCustomerReportOutputEntity } from './tms-customer-report.entity/tms-customer-report.output.entity';

@Controller('api/tms-customer-report')
export class TmsCustomerReportController {
    constructor(
        private tmsCustomerReportService: TmsCustomerReportService
    ) { }

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGTmsCustomerReport(
        @Query() tmsCustomerReportQueryDto: TmsCustomerReportQueryDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();

        let time = new StoreProcedureGetTimeDatabase(
            tmsCustomerReportQueryDto.report_type
        ).getTimeType();


        let tmsCustomeReport: StoreProcedureOutputResultInterface<
            TmsCustomerReportEntity, TmsCustomerReportOutputEntity> = await this.tmsCustomerReportService.spGTmsCustomerReport(
                tmsCustomerReportQueryDto.restaurant_id,
                tmsCustomerReportQueryDto.restaurant_brand_id,
                tmsCustomerReportQueryDto.branch_id,
                time.from_date,
                time.to_date,
                time.group_type
            );

        response.setData(new TmsCustomeReportDataResponse(tmsCustomeReport.list, tmsCustomeReport.output));

        return res.status(HttpStatus.OK).send(response);

    }
}
