import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResultOutput } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { Repository } from 'typeorm';
import { SupplierRevenueOutputReportByTimeEntity } from './supplier-revenue-report-by-time.entity/supplier-revenue-output-report-by-time.entity';
import { SupplierRevenueReportEntity } from './supplier-revenue-report-by-time.entity/supplier-revenue-report-by-time.entity';

@Injectable()
export class SupplierRevenueReportByTimeService {
    constructor(
        @InjectRepository(SupplierRevenueReportEntity)
        private supplierRevenueReportEntity: Repository<SupplierRevenueReportEntity>
    ) { }

    async spGRpSupplierRevenueByTime(supplierId: number, groupByType: number, fromDateString: string, toDateString: string): Promise<StoreProcedureOutputResultInterface<SupplierRevenueReportEntity, SupplierRevenueOutputReportByTimeEntity>> {
        let supplierRevenueReport = await this.supplierRevenueReportEntity.query('CALL sp_g_rp_supplier_revenue_by_time(?,?,?,?,@totalRevenue,@totalCost,@totalProfit,@profitPercent,@status,@message); SELECT @totalRevenue AS total_revenue, @totalCost AS total_cost, @totalProfit AS total_profit, @profitPercent AS profit_percent, @status AS status_code, @message AS message_error',
            [
                supplierId,
                groupByType,
                fromDateString,
                toDateString
            ]);
        ExceptionStoreProcedure.validate(supplierRevenueReport);

        let result: StoreProcedureOutputResultInterface<SupplierRevenueReportEntity, SupplierRevenueOutputReportByTimeEntity> =
            new StoreProcedureResultOutput<SupplierRevenueReportEntity>().getResultOutputList(supplierRevenueReport)

        return result;
    }
}
