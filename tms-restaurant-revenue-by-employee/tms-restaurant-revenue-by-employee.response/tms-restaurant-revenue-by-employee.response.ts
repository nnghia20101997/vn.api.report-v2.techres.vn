import { TmsRestaurantRevenueByEmployeeReportEntity } from "../tms-restaurant-revenue-by-employee.entity/tms-restaurant-revenue-by-employee.entity";

export class TmsRestaurantRevenueByEmployeeReportResponse {
    employee_id: number;

    avatar: string;

    username: string;

    employee_name: string;

    employee_role_name: string;

    order_count: number;

    revenue: number;

    constructor(baseEntity?: TmsRestaurantRevenueByEmployeeReportEntity) {
        this.employee_id = baseEntity? + baseEntity.employee_id : 0;
        this.avatar = baseEntity? baseEntity.avatar : "";
        this.username = baseEntity? baseEntity.username : "";
        this.employee_name = baseEntity? baseEntity.employee_name : "";
        this.employee_role_name = baseEntity? baseEntity.employee_role_name : "";
        this.order_count = baseEntity? + baseEntity.order_count : 0;
        this.revenue = baseEntity? + baseEntity.revenue : 0;
    }

    public mapToList(baseEntities: TmsRestaurantRevenueByEmployeeReportEntity[]): TmsRestaurantRevenueByEmployeeReportResponse[] {
        let data: TmsRestaurantRevenueByEmployeeReportResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new TmsRestaurantRevenueByEmployeeReportResponse(e))
        });

        return data;

    }
}