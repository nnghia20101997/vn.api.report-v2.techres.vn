import { RestaurantRevenueByBranchReportEntity } from "../restaurant-revenue-by-branch-report.entity/restaurant-revenue-by-branch-report.entity";

export class RestaurantRevenueByBranchReportResponse {

    restaurant_brand_id: number ;
    
    restaurant_brand_name: string;

    branch_id: number ;
    
    branch_name: string ;

    total_revenue_paid: number ;

    total_revenue_in_service: number ;

    total_revenue_estimated: number ;

    branch_status: number;

    /* 
    trả về response báo cáo doanh thu hằng ngày theo chi nhánh
    */
    constructor(
      currentDayModelDataEntity ?: RestaurantRevenueByBranchReportEntity
    ) {
    this.branch_id =  currentDayModelDataEntity ? +currentDayModelDataEntity.branch_id : 0 ;
    this.branch_name =  currentDayModelDataEntity ? currentDayModelDataEntity.branch_name : "" ;
    this.restaurant_brand_id =  currentDayModelDataEntity ? +currentDayModelDataEntity.restaurant_brand_id : 0 ;
    this.restaurant_brand_name =  currentDayModelDataEntity ? currentDayModelDataEntity.restaurant_brand_name : "" ;
    this.branch_status = currentDayModelDataEntity ? +currentDayModelDataEntity.branch_status : 0 ;
    this.total_revenue_paid =  currentDayModelDataEntity ? +currentDayModelDataEntity.total_revenue_paid : 0 ;
    this.total_revenue_in_service =  currentDayModelDataEntity ? +currentDayModelDataEntity.total_revenue_in_service : 0 ;
    this.total_revenue_estimated =  currentDayModelDataEntity ? +currentDayModelDataEntity.total_revenue_estimated : 0 ;
    }
  
    public mapToList(data: RestaurantRevenueByBranchReportEntity[]) {
      let response: RestaurantRevenueByBranchReportResponse[] = [];
      data.forEach((e) => {
        response.push(new RestaurantRevenueByBranchReportResponse(e));
      });
      return response;
    }
  }
  