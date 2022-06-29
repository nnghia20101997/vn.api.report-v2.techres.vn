import { AdminAdvertisingRevenueDetailDataModelEntity } from "../admin-advertising-revenue-detail.entity/admin-advertising-revenue-detail.entity";

export class AdminAdvertisingRevenueDetailResponse {
  total_price: number;

  report_time: string;

  media_length_by_second: number;

  constructor(
    adminAdvertisingRevenueDetailDataModelEntity?: AdminAdvertisingRevenueDetailDataModelEntity
  ) {
    this.total_price = adminAdvertisingRevenueDetailDataModelEntity
      ? +adminAdvertisingRevenueDetailDataModelEntity.total_price
      : 0;
    this.report_time = adminAdvertisingRevenueDetailDataModelEntity
      ? adminAdvertisingRevenueDetailDataModelEntity.report_time
      : "";
    this.media_length_by_second = adminAdvertisingRevenueDetailDataModelEntity
      ? +adminAdvertisingRevenueDetailDataModelEntity.media_length_by_second
      : 0;
  }

  public mapToList(data: AdminAdvertisingRevenueDetailDataModelEntity[]) {
    let response: AdminAdvertisingRevenueDetailResponse[] = [];
    data.forEach((e) => {
      response.push(new AdminAdvertisingRevenueDetailResponse(e));
    });
    return response;
  }
}
