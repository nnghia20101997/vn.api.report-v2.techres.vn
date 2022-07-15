import { TmsRestaurantBusinessGrowthReportEntity } from "../tms-restaurant-business-growth.entity/tms-restaurant-business-growth.entity";

export class TmsRestaurantBusinessGrowthReportResponse {
   
    id: number;

    restaurant_id :number;

    restaurant_brand_id :number;

    branch_id :number;

    report_time :string;

    total_revenue :number;

    total_revenue_incremental :number;

    one_ago_total_revenue :number;

    two_ago_total_revenue :number;

    three_ago_total_revenue :number;

    four_ago_total_revenue :number;

    total_cost :number;

    total_cost_recuring_average :number;

    total_salary_average :number;

    total_cost_of_departure :number;

    total_cost_of_departure_detail :number;

    total_cost_final :number;

    total_cost_final_detail :number;

    total_cost_happenning :number;

    one_ago_total_cost :number;

    two_ago_total_cost :number;

    three_ago_total_cost :number;

    four_ago_total_cost :number;

    total_cost_supplier_order_of_departure :number;

    total_cost_supplier_order_of_departure_detail :number;

    constructor(tmsRestaurantBusinessGrowthReportEntity?: TmsRestaurantBusinessGrowthReportEntity) {
        this.id = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.id : 0;
        this.restaurant_id = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.restaurant_id : 0;
        this.restaurant_brand_id = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.restaurant_brand_id : 0;
        this.branch_id = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.branch_id : 0;
        this.report_time = tmsRestaurantBusinessGrowthReportEntity ? tmsRestaurantBusinessGrowthReportEntity.report_time : "";
        this.total_revenue = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.total_revenue : 0;
        this.total_revenue_incremental = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.total_revenue_incremental : 0;
        this.one_ago_total_revenue = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.one_ago_total_revenue : 0;
        this.two_ago_total_revenue = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.two_ago_total_revenue : 0;
        this.three_ago_total_revenue = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.three_ago_total_revenue : 0;
        this.four_ago_total_revenue = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.four_ago_total_revenue : 0;
        this.total_cost = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.total_cost : 0;
        this.total_cost_recuring_average = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.total_cost_recuring_average : 0;
        this.total_salary_average = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.total_salary_average : 0;
        this.total_cost_of_departure = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.total_cost_of_departure : 0;
        this.total_cost_of_departure_detail = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.total_cost_of_departure_detail : 0;
        this.total_cost_final = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.total_cost_final : 0;
        this.total_cost_final_detail = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.total_cost_final_detail : 0;
        this.total_cost_happenning = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.total_cost_happenning : 0;
        this.one_ago_total_cost = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.one_ago_total_cost : 0;
        this.two_ago_total_cost = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.two_ago_total_cost : 0;
        this.three_ago_total_cost = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.three_ago_total_cost : 0;
        this.four_ago_total_cost = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.four_ago_total_cost : 0;
        this.total_cost_supplier_order_of_departure = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.total_cost_supplier_order_of_departure : 0;
        this.total_cost_supplier_order_of_departure_detail = tmsRestaurantBusinessGrowthReportEntity ? +tmsRestaurantBusinessGrowthReportEntity.total_cost_supplier_order_of_departure_detail : 0;
    }

    public mapToList(baseEntity: TmsRestaurantBusinessGrowthReportEntity[]): TmsRestaurantBusinessGrowthReportResponse[] {
        let data: TmsRestaurantBusinessGrowthReportResponse[] = [];

        baseEntity.forEach(e => {
            data.push(new TmsRestaurantBusinessGrowthReportResponse(e));
        });

        return data;

    }
}