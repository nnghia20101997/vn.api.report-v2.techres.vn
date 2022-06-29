import { AdminAdvertisingRevenueEntity } from "../admin-advertising-revenue.entity/admin-advertising-revenue.entity";

export class AdminAdvertisingRevenueResponse {

    report_time: number;

    total_price: number;

    report_day: string;

	constructor(adminAdvertisingRevenueEntity?: AdminAdvertisingRevenueEntity){
        this.report_time = adminAdvertisingRevenueEntity
        ? +adminAdvertisingRevenueEntity.report_time
        : 0;
      this.total_price = adminAdvertisingRevenueEntity
        ? +adminAdvertisingRevenueEntity.total_price
        : 0;
      this.report_day = adminAdvertisingRevenueEntity 
        ?  adminAdvertisingRevenueEntity.report_day
        : "";
    }

    public mapToList(data: AdminAdvertisingRevenueEntity[]) {
      let response: AdminAdvertisingRevenueResponse[] = [];
      data.forEach((e) => {
        response.push(new AdminAdvertisingRevenueResponse(e));
      });
      return response;
    }
    
}