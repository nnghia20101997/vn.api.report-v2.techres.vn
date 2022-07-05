import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { SupplierMaterialPriceChangeHistoriesReportEntity } from './supplier-material-price-change-histories-report.entity/supplier-material-price-change-histories-report.entity';
@Injectable()
export class SupplierMaterialPriceChangeHistoriesReportService {

    @InjectRepository(SupplierMaterialPriceChangeHistoriesReportEntity)
    private supplierMaterialPriceChangeHistoriesReportEntity: Repository<SupplierMaterialPriceChangeHistoriesReportEntity>
    

     /**
   *@param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param supplierId
   * @param fromDate
   * @param toDate
   * @param supplierMaterialId
   * @param reportType
   * @returns
   */
    async spRpSupplierMaterialPriceChangeHistories(
        restaurantId : number , 
        restaurantBrandId : number ,
        branchId : number , 
        supplierId :  number ,
        fromDate : string , 
        toDate : string ,
        supplierMaterialId : number , 
        reportType : number 
        ): Promise<SupplierMaterialPriceChangeHistoriesReportEntity[]> {
        let result = await this.supplierMaterialPriceChangeHistoriesReportEntity.query('CALL sp_rp_supplier_material_price_change_histories(?,?,?,?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            branchId,
            supplierId,
            fromDate,
            toDate,
            supplierMaterialId,
            reportType
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : SupplierMaterialPriceChangeHistoriesReportEntity[] = new StoreProcedureResult<SupplierMaterialPriceChangeHistoriesReportEntity>().getResultList(result)
        return data ;
    }
}
