import { SupplierMaterialPriceChangeHistoriesReportEntity } from "../supplier-material-price-change-histories-report.entity/supplier-material-price-change-histories-report.entity";

export class SupplierMaterialPriceChangeHistoriesReportResponse{

    id : number ;

    supplier_id: number;

    supplier_name : string;

    supplier_material_id: number;

    supplier_material_name : string ; 

    restaurant_id : number ;
     
    restaurant_brand_id : number ;

    branch_id : number ;
      
    total_new_price : number ;

    total_old_price : number ;
      
    total_price_difference : number ;

    created_at : string ; 

    constructor(entity ?: SupplierMaterialPriceChangeHistoriesReportEntity){
        this.supplier_id = entity ? +entity.supplier_id : 0;
        this.supplier_name = entity ? entity.supplier_name : "" ;
        this.supplier_material_id = entity ? +entity.supplier_material_id : 0;
        this.supplier_material_name = entity ? entity.supplier_material_name : "" ;

        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0;
        this.branch_id = entity ? +entity.branch_id : 0;
        this.total_new_price = entity ? +entity.total_new_price : 0 ;
        this.total_old_price = entity ? +entity.total_old_price : 0 ;
        this.total_price_difference = entity ? +entity.total_price_difference : 0 ;
        this.created_at = entity ? entity.created_at : "" ;

    }

     public mapToList(data: SupplierMaterialPriceChangeHistoriesReportEntity[]) {
      let response: SupplierMaterialPriceChangeHistoriesReportEntity[] = [];
      data.forEach((e) => {
        return response.push(new SupplierMaterialPriceChangeHistoriesReportResponse(e));
      });
      return response;
    }
}