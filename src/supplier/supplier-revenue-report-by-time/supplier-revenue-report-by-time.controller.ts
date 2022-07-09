import {
    Controller,
    Get,
    HttpStatus,
    Query,
    Res,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { Response } from "express";
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { SupplierRevenueReportByTimeService } from './supplier-revenue-report-by-time.service';
import { SupplierRevenueReportQueryDto } from './supplier-revenue-report-by-time.dto/supplier-revenue-report-by-time.dto';
import { SupplierRevenueReportEntity } from './supplier-revenue-report-by-time.entity/supplier-revenue-report-by-time.entity';
import { SupplierRevenueOutputReportByTimeEntity } from './supplier-revenue-report-by-time.entity/supplier-revenue-output-report-by-time.entity';
import { SupplierRevenueReportResponse } from './supplier-revenue-report-by-time.response/supplier-revenue-report.response';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { GetTimeDataBase } from 'src/utils.common/utils.format-time.common/utils.get.time.database';
import moment from 'moment';
import { UtilsDate } from 'src/utils.common/utils.format-time.common/utils.format-time.common';

@Controller('api/supplier-revenue-report-by-time')
export class SupplierRevenueReportByTimeController {
    constructor(
        private supplierRevenueReportByTimeService: SupplierRevenueReportByTimeService
    ) { }

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRpSupplierRevenueByTime(
        @Query() supplierRevenueReportQueryDto: SupplierRevenueReportQueryDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let fromDate = "";
        let toDate = "";
        let groupByType = 2;

        if (supplierRevenueReportQueryDto.from_date == "" || supplierRevenueReportQueryDto.to_date == "") {
            let reportTime: GetTimeDataBase = new StoreProcedureGetTimeDatabase(supplierRevenueReportQueryDto.report_type, supplierRevenueReportQueryDto.from_date).getTimeReport();

            fromDate = reportTime.from_date;
            toDate = reportTime.to_date;
            groupByType = reportTime.group_type;
        } else {
            fromDate = UtilsDate.formatDateInsertDatabase(supplierRevenueReportQueryDto.from_date);
            toDate = UtilsDate.formatDateInsertDatabase(supplierRevenueReportQueryDto.to_date);
        }

        let supplierRevenueReport: StoreProcedureOutputResultInterface<SupplierRevenueReportEntity, SupplierRevenueOutputReportByTimeEntity> =
            await this.supplierRevenueReportByTimeService.spGRpSupplierRevenueByTime(
                supplierRevenueReportQueryDto.supplier_id,
                groupByType,
                fromDate,
                toDate
            );

        response.setData(
            new SupplierRevenueReportResponse(supplierRevenueReport.output, supplierRevenueReport.list)
        );
        return res.status(HttpStatus.OK).send(response);
    }












}
