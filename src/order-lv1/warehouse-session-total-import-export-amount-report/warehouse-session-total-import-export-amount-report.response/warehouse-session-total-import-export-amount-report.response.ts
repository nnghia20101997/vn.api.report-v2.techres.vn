import { WarehouseSessionTotalImportExportAmountReportEntity } from "../warehouse-session-total-import-export-amount-report.entity/warehouse-session-total-import-export-amount-report.entity";

export class WarehouseSessionTotalImportExportAmountReportResponse{

    id: number;
     
    restaurant_id: number;
     
    restaurant_brand_id: number;
     
    branch_id : number ; 
     
    report_time : string ;
     
    import_quantity_amount : number ;
     
    export_quantity_amount : number ;

    constructor(entity ?: WarehouseSessionTotalImportExportAmountReportEntity){
        this.id = entity ? +entity.id : 0;
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0 ;
        this.branch_id = entity ? +entity.branch_id : 0 ;
        this.import_quantity_amount = entity ? +entity.import_quantity_amount : 0 ;
        this.export_quantity_amount = entity ? +entity.export_quantity_amount : 0 ;
        this.report_time = entity ? entity.report_time : "" ;
    }

     public mapToList(data: WarehouseSessionTotalImportExportAmountReportEntity[]) {
      let response: WarehouseSessionTotalImportExportAmountReportEntity[] = [];
      data.forEach((e) => {
        response.push(new WarehouseSessionTotalImportExportAmountReportResponse(e));
      });
      return response;
    }
}