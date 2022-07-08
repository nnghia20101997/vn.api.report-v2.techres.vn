import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupplierOrderListReportEntity } from './supplier-order-list-report.entity/supplier-order-list-report.entity';
import { Pagination } from 'src/utils.common/utils.pagination.pagination/utils.pagination.common';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-result.interface.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';

@Injectable()
export class SupplierOrderListReportService {
    constructor(
        @InjectRepository(SupplierOrderListReportEntity)
        private supplierOrderListReport: Repository<SupplierOrderListReportEntity>
    ) { }

    async spGRpSupplierOrderListReport(supplierId: number, fromDateString: string, toDateString: string, keySearch: string, pagination: Pagination): Promise<StoreProcedureResultInterface<SupplierOrderListReportEntity>> {
        let supplierOrderListReport = await this.supplierOrderListReport.query('CALL sp_g_rp_supplier_order_list_report(?,?,?,?,?,?,@totalRecord,@status,@message); SELECT @status AS status_code , @message AS message_error, @totalRecord AS total_record',
            [
                supplierId,
                fromDateString,
                toDateString,
                keySearch,
                pagination.getLimit(),
                pagination.getOffset()
            ]);
        ExceptionStoreProcedure.validate(supplierOrderListReport);

        let result: StoreProcedureResultInterface<SupplierOrderListReportEntity> =
            new StoreProcedureResult<SupplierOrderListReportEntity>().getResultPagination(supplierOrderListReport)

        return result;
    }

}
