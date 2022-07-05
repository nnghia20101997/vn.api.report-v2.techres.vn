import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { WarehouseSessionTotalImportExportAmountReportQueryDTO } from './warehouse-session-total-import-export-amount-report.dto/warehouse-session-total-import-export-amount-report.query.dto';
import { WarehouseSessionTotalImportExportAmountReportEntity } from './warehouse-session-total-import-export-amount-report.entity/warehouse-session-total-import-export-amount-report.entity';
import { WarehouseSessionTotalImportExportAmountReportResponse } from './warehouse-session-total-import-export-amount-report.response/warehouse-session-total-import-export-amount-report.response';
import { WarehouseSessionTotalImportExportAmountReportService } from './warehouse-session-total-import-export-amount-report.service';

@Controller('api/warehouse-session-total-import-export-amount-report')
export class WarehouseSessionTotalImportExportAmountReportController {

    constructor(
        private warehouseSessionTotalImportExportAmountReportService: WarehouseSessionTotalImportExportAmountReportService
    ) { }

    @Get("")
    async getWarehouseSessionTotalImportExportAmount(@Query() warehouseSessionTotalImportExportAmountReportQueryDTO : WarehouseSessionTotalImportExportAmountReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : WarehouseSessionTotalImportExportAmountReportEntity[]= await this.warehouseSessionTotalImportExportAmountReportService.spGetWarehouseSessionTotalImportExportAmount(
            warehouseSessionTotalImportExportAmountReportQueryDTO.restaurant_id ,
            warehouseSessionTotalImportExportAmountReportQueryDTO.branch_id,
            warehouseSessionTotalImportExportAmountReportQueryDTO.material_category_type_parent_id,
            warehouseSessionTotalImportExportAmountReportQueryDTO.to_date_string,
            warehouseSessionTotalImportExportAmountReportQueryDTO.group_by_type

        );
            response.setData(new WarehouseSessionTotalImportExportAmountReportResponse().mapToList(result));
            return res.status(HttpStatus.OK).send(response);
    }
}
