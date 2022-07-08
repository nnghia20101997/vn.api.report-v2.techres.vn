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
import { SupplierWarehouseSesssionReportQueryDto } from './supplier-warehouse-sesssion-report.dto/supplier-warehouse-sesssion-report.dto';
import { Response } from "express";
import { SupplierWarehouseSesssionReportEntity } from './supplier-warehouse-sesssion-report.entity/supplier-warehouse-sesssion-report.entity';
import { SupplierWarehouseSesssionReportResponse } from './supplier-warehouse-sesssion-report.response/supplier-warehouse-sesssion-report.response';
import { SupplierWarehouseSesssionReportService } from './supplier-warehouse-sesssion-report.service';
import { UtilsDate } from 'src/utils.common/utils.format-time.common/utils.format-time.common';

@Controller('api/supplier-warehouse-sesssion-report')
export class SupplierWarehouseSesssionReportController {
    constructor(
        private supplierWarehouseSesssionReportService: SupplierWarehouseSesssionReportService
    ) { }

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRpSupplierWarehouseSesssionReport(
        @Query() supplierWarehouseSesssionReportQueryDto: SupplierWarehouseSesssionReportQueryDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();

        let supplierWarehouseSesssionReport: SupplierWarehouseSesssionReportEntity =
            await this.supplierWarehouseSesssionReportService.spGRpSupplierWarehouseSesssionReport(
                supplierWarehouseSesssionReportQueryDto.supplier_id,
                UtilsDate.formatDateInsertDatabase(supplierWarehouseSesssionReportQueryDto.from_date),
                UtilsDate.formatDateInsertDatabase(supplierWarehouseSesssionReportQueryDto.to_date)
            );

        response.setData(
            new SupplierWarehouseSesssionReportResponse(supplierWarehouseSesssionReport)
        );
        return res.status(HttpStatus.OK).send(response);
    }
}
