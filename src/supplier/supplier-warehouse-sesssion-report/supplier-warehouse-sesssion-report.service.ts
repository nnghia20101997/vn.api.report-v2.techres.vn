import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { SupplierWarehouseSesssionReportEntity } from './supplier-warehouse-sesssion-report.entity/supplier-warehouse-sesssion-report.entity';

@Injectable()
export class SupplierWarehouseSesssionReportService {
    constructor(
        @InjectRepository(SupplierWarehouseSesssionReportEntity)
        private supplierWarehouseSesssionReport: Repository<SupplierWarehouseSesssionReportEntity>
    ) { }

    async spGRpSupplierWarehouseSesssionReport(supplierId: number, fromDateString: string, toDateString: string): Promise<SupplierWarehouseSesssionReportEntity> {
        let supplierWarehouseSesssion = await this.supplierWarehouseSesssionReport.query('CALL sp_g_rp_supplier_warehouse_sesssion_report(?,?,?,@status,@message); SELECT @status AS status_code, @message AS message_error',
            [
                supplierId,
                fromDateString,
                toDateString
            ]);
        ExceptionStoreProcedure.validate(supplierWarehouseSesssion);

        let result: SupplierWarehouseSesssionReportEntity =
            new StoreProcedureResult<SupplierWarehouseSesssionReportEntity>().getResultDetail(supplierWarehouseSesssion)

        return result;
    }
}
