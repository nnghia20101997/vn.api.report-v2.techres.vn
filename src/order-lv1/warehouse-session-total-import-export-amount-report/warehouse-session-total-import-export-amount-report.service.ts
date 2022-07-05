import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { WarehouseSessionTotalImportExportAmountReportEntity } from './warehouse-session-total-import-export-amount-report.entity/warehouse-session-total-import-export-amount-report.entity';

@Injectable()
export class WarehouseSessionTotalImportExportAmountReportService {
    @InjectRepository(WarehouseSessionTotalImportExportAmountReportEntity)
    private restaurantVatReportEntity: Repository<WarehouseSessionTotalImportExportAmountReportEntity>
    

     /**
   *@param restaurantId
   * @param branchId
   * @param materialCategoryTypeParentId
   * @param toDateString
   * @param groupByType
   * @returns
   */
    async spGetWarehouseSessionTotalImportExportAmount(
        restaurantId : number , 
        branchId : number ,
        materialCategoryTypeParentId : number , 
        toDateString : string , 
        groupByType : number 
        ): Promise<WarehouseSessionTotalImportExportAmountReportEntity[]> {
        let result = await this.restaurantVatReportEntity.query('CALL sp_get_warehouse_session_total_import_export_amount(?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            branchId,
            materialCategoryTypeParentId,
            toDateString,
            groupByType,
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : WarehouseSessionTotalImportExportAmountReportEntity[] = new StoreProcedureResult<WarehouseSessionTotalImportExportAmountReportEntity>().getResultList(result)
        return data ;
    }
}
