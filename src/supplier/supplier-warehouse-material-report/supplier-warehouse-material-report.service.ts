import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { Pagination } from 'src/utils.common/utils.pagination.pagination/utils.pagination.common';
import { StoreProcedureResultOutput } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { Repository } from 'typeorm';
import { SupplierWarehouseMaterialOutputReportEntity } from './supplier-warehouse-material-report.entity/supplier-warehouse-material-output-report.entity';
import { SupplierWarehouseMaterialReportEntity } from './supplier-warehouse-material-report.entity/supplier-warehouse-material-report.entity';

@Injectable()
export class SupplierWarehouseMaterialReportService {
    constructor(
        @InjectRepository(SupplierWarehouseMaterialReportEntity)
        private supplierWarehouseMaterialReport: Repository<SupplierWarehouseMaterialReportEntity>
    ) { }

    /**
     * 
     * @param supplierId 
     * @param materialCategorieId 
     * @param fromDateString 
     * @param toDateString 
     * @param keySearch 
     * @param pagination 
     * @returns 
     */
    async spGRpSupplierWarehouseMaterialReport(supplierId: number, materialCategorieId: number, fromDateString: string, toDateString: string, keySearch: string, pagination: Pagination): Promise<StoreProcedureOutputResultInterface<SupplierWarehouseMaterialReportEntity, SupplierWarehouseMaterialOutputReportEntity>> {
        let data = await this.supplierWarehouseMaterialReport.query('CALL sp_g_rp_supplier_warehouse_material_report(?,?,?,?,?,?,?,@import_quantity,@export_quantity,@return_quantity,@remaining_quantity,@total_import_amount,@total_export_amount,@total_return_amount,@total_remaining_amount,@total_record,@status_code,@message_error); SELECT @import_quantity AS import_quantity, @export_quantity AS export_quantity, @return_quantity AS return_quantity, @remaining_quantity AS remaining_quantity, @total_import_amount AS total_import_amount, @total_export_amount AS total_export_amount, @total_return_amount AS total_return_amount, @total_remaining_amount AS total_remaining_amount, @total_record AS total_record, @status_code AS status_code, @message_error AS message_error',
            [
                supplierId,
                materialCategorieId,
                fromDateString,
                toDateString,
                keySearch,
                pagination.getLimit(),
                pagination.getOffset()
            ]);
        ExceptionStoreProcedure.validate(data);

        let result: StoreProcedureOutputResultInterface<SupplierWarehouseMaterialReportEntity, SupplierWarehouseMaterialOutputReportEntity> =
            new StoreProcedureResultOutput<SupplierWarehouseMaterialReportEntity>().getResultOutputList(data)

        return result;
    }
}
