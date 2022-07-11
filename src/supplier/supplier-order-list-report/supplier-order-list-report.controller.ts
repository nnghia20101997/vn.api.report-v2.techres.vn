import {
    Controller,
    Get,
    HttpStatus,
    Query,
    Res,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { Pagination } from 'src/utils.common/utils.pagination.pagination/utils.pagination.common';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { Response } from "express";
import { SupplierOrderListReportQueryDto } from './supplier-order-list-report.dto/supplier-order-list-report.query.dto';
import { SupplierOrderListReportEntity } from './supplier-order-list-report.entity/supplier-order-list-report.entity';
import { SupplierOrderListReportResponse } from './supplier-order-list-report.response/supplier-order-list-report.response';
import { SupplierOrderListReportService } from './supplier-order-list-report.service';
import { SupplierOrderTotalRecordReportResponse } from './supplier-order-list-report.response/supplier-order-total-record-list-report.response';
import { StoreProcedureResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-result.interface.common';
import { UtilsDate } from 'src/utils.common/utils.format-time.common/utils.format-time.common';
import { BaseListResponseData } from 'src/utils.common/utils.response.common/utils.base-list.response.common';

@Controller('api/supplier-order-list-report')
export class SupplierOrderListReportController {
    constructor(
        private supplierOrderListReportService: SupplierOrderListReportService
    ) { }

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRpSupplierOrderListReport(
        @Query() supplierOrderListReportQueryDto: SupplierOrderListReportQueryDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let pagination: Pagination = new Pagination(supplierOrderListReportQueryDto.page, supplierOrderListReportQueryDto.limit);

        let supplierOrderListReport: StoreProcedureResultInterface<SupplierOrderListReportEntity> =
            await this.supplierOrderListReportService.spGRpSupplierOrderListReport(
                supplierOrderListReportQueryDto.supplier_id,
                UtilsDate.formatDateInsertDatabase(supplierOrderListReportQueryDto.from_date),
                UtilsDate.formatDateInsertDatabase(supplierOrderListReportQueryDto.to_date),
                supplierOrderListReportQueryDto.key_search,
                pagination
            );
        let supplierOrderListReportResponse: SupplierOrderListReportResponse[] = new SupplierOrderListReportResponse().mapToList(supplierOrderListReport.list);
        let result: BaseListResponseData<SupplierOrderListReportResponse> = new BaseListResponseData(supplierOrderListReportResponse, pagination.getLimit(), supplierOrderListReport.total_record);
        response.setData(
            result
        );
        return res.status(HttpStatus.OK).send(response);
    }
}
