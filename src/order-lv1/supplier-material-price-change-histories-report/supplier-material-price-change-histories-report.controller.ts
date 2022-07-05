import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { SupplierMaterialPriceChangeHistoriesReportQueryDTO } from './supplier-material-price-change-histories-report.dto/supplier-material-price-change-histories-report.query.dto';
import { SupplierMaterialPriceChangeHistoriesReportEntity } from './supplier-material-price-change-histories-report.entity/supplier-material-price-change-histories-report.entity';
import { SupplierMaterialPriceChangeHistoriesReportResponse } from './supplier-material-price-change-histories-report.response/supplier-material-price-change-histories-report.response';
import { SupplierMaterialPriceChangeHistoriesReportService } from './supplier-material-price-change-histories-report.service';

@Controller('api/supplier-material-price-change-histories-report')
export class SupplierMaterialPriceChangeHistoriesReportController {

    constructor(
        private supplierMaterialPriceChangeHistoriesReportService: SupplierMaterialPriceChangeHistoriesReportService
    ) { }

    @Get("")
    async getWarehouseSessionTotalImportExportAmount(@Query() supplierMaterialPriceChangeHistoriesReportQueryDTO : SupplierMaterialPriceChangeHistoriesReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : SupplierMaterialPriceChangeHistoriesReportEntity[]= await this.supplierMaterialPriceChangeHistoriesReportService.spRpSupplierMaterialPriceChangeHistories(
            supplierMaterialPriceChangeHistoriesReportQueryDTO.restaurant_id ,
            supplierMaterialPriceChangeHistoriesReportQueryDTO.restaurant_brand_id,
            supplierMaterialPriceChangeHistoriesReportQueryDTO.branch_id,
            supplierMaterialPriceChangeHistoriesReportQueryDTO.supplier_id,
            supplierMaterialPriceChangeHistoriesReportQueryDTO.from_date,
            supplierMaterialPriceChangeHistoriesReportQueryDTO.to_date,
            supplierMaterialPriceChangeHistoriesReportQueryDTO.supplier_material_id,
            supplierMaterialPriceChangeHistoriesReportQueryDTO.report_type

        );
            response.setData(new SupplierMaterialPriceChangeHistoriesReportResponse().mapToList(result));
            return res.status(HttpStatus.OK).send(response);
    }
}
