import { AdminGravityProductBestSellerDataModelEntity } from "../admin-gravity-product-best-seller.entity/admin-gravity-product-best-seller.entity";

export class AdminGravityProductBestSellerResponse{
    product_id:number;

    product_name:string;

    sales_ratio:number;


    constructor(adminGravityProductBestSellerDataModelEntity?: AdminGravityProductBestSellerDataModelEntity) {
        this.product_id = adminGravityProductBestSellerDataModelEntity
          ? +adminGravityProductBestSellerDataModelEntity.product_id
          : 0;
        this.product_name = adminGravityProductBestSellerDataModelEntity
          ? adminGravityProductBestSellerDataModelEntity.product_name
          : "";
        this.sales_ratio = adminGravityProductBestSellerDataModelEntity
          ? +adminGravityProductBestSellerDataModelEntity.sales_ratio
          : 0;
       
      }
    
      public mapToList(data: AdminGravityProductBestSellerDataModelEntity[]) {
        let response: AdminGravityProductBestSellerResponse[] = [];
        data.forEach((e) => {
          response.push(new AdminGravityProductBestSellerResponse(e));
        });
        return response;
      }
}