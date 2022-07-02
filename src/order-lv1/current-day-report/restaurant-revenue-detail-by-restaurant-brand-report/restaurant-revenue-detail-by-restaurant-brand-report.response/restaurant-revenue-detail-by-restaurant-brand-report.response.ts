import { RestaurantRevenueDetailByRestaurantBrandReportEntity } from "../restaurant-revenue-detail-by-restaurant-brand-report.entity/restaurant-revenue-detail-by-restaurant-brand-report.entity";

export class RestaurantRevenueDetailByRestaurantBrandReportResponse {

    restaurant_id: Number;

    restaurant_brand_id: number ;
    
    restaurant_brand_name: string;

    branch_id: number ;
    
    branch_name: string ;

    total_revenue_paid: number ;

    total_revenue_in_service: number ;

    total_revenue_estimated: number ;

    branch_status: number;

    /* 
    trả về response báo cáo doanh thu hằng ngày theo thương hiệu
    */
    constructor(
      currentDayModelDataEntity ?: RestaurantRevenueDetailByRestaurantBrandReportEntity
    ) {
     this.restaurant_id = currentDayModelDataEntity ? +currentDayModelDataEntity.restaurant_id : 0 ;
     this.restaurant_brand_id =  currentDayModelDataEntity ? +currentDayModelDataEntity.restaurant_brand_id : 0 ;
     this.restaurant_brand_name =  currentDayModelDataEntity ? currentDayModelDataEntity.restaurant_brand_name : "" ;
     this.branch_id =  currentDayModelDataEntity ? +currentDayModelDataEntity.branch_id : 0 ;
     this.branch_name =  currentDayModelDataEntity ? currentDayModelDataEntity.branch_name : "" ;
     this.total_revenue_paid =  currentDayModelDataEntity ? +currentDayModelDataEntity.total_revenue_paid : 0 ;
     this.total_revenue_in_service =  currentDayModelDataEntity ? +currentDayModelDataEntity.total_revenue_in_service : 0 ;
     this.total_revenue_estimated =  currentDayModelDataEntity ? +currentDayModelDataEntity.total_revenue_estimated : 0 ;
    }
  
    // public mapToList(data: AdminAdvertisingRevenueDetailDataModelEntity[]) {
    //   let response: AdminAdvertisingRevenueDetailResponse[] = [];
    //   data.forEach((e) => {
    //     response.push(new AdminAdvertisingRevenueDetailResponse(e));
    //   });
    //   return response;
    // }
  }
  