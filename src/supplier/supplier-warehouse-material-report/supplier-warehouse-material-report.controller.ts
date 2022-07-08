import {
    Controller,
    Get,
    HttpStatus,
    Query,
    Res,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { SupplierWarehouseMaterialReportService } from './supplier-warehouse-material-report.service';
import { Response } from "express";
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { SupplierWarehouseMaterialReportEntity } from './supplier-warehouse-material-report.entity/supplier-warehouse-material-report.entity';
import { SupplierWarehouseMaterialOutputReportEntity } from './supplier-warehouse-material-report.entity/supplier-warehouse-material-output-report.entity';
import { SupplierWarehouseMaterialReportDto } from './supplier-warehouse-material-report.dto/supplier-warehouse-material-report.dto';
import { Pagination } from 'src/utils.common/utils.pagination.pagination/utils.pagination.common';
import { SupplierWarehouseMaterialOutputReportResponse } from './supplier-warehouse-material-report.response/supplier-warehouse-material-output-report.response';
import { UtilsDate } from 'src/utils.common/utils.format-time.common/utils.format-time.common';

@Controller('api/supplier-warehouse-material-report')
export class SupplierWarehouseMaterialReportController {
    constructor(
        private supplierWarehouseMaterialReportService: SupplierWarehouseMaterialReportService
    ) { }

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRpSupplierWarehouseMaterialReport(
        @Query() supplierWarehouseMaterialReportDto: SupplierWarehouseMaterialReportDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let pagination: Pagination = new Pagination(supplierWarehouseMaterialReportDto.page, supplierWarehouseMaterialReportDto.limit);

        let data: StoreProcedureOutputResultInterface<SupplierWarehouseMaterialReportEntity, SupplierWarehouseMaterialOutputReportEntity> =
            await this.supplierWarehouseMaterialReportService.spGRpSupplierWarehouseMaterialReport(
                supplierWarehouseMaterialReportDto.supplier_id,
                supplierWarehouseMaterialReportDto.material_categorie_id,
                UtilsDate.formatDateInsertDatabase(supplierWarehouseMaterialReportDto.from_date),
                UtilsDate.formatDateInsertDatabase(supplierWarehouseMaterialReportDto.to_date),
                supplierWarehouseMaterialReportDto.key_search,
                pagination
            );

        response.setData(
            new SupplierWarehouseMaterialOutputReportResponse(data.output, data.list)
        );

        return res.status(HttpStatus.OK).send(response);
    }
}
