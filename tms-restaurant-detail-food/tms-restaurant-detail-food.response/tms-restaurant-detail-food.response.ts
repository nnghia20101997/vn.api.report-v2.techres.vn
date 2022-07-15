import { TmsRestaurantDetailFoodReportEntity } from "../tms-restaurant-detail-food.entity/tms-restaurant-detail-food.entity";

export class TmsRestaurantDetailFoodReportResponse {
    order_id: number;

    employee_id: number;

    employee_name: string;

    food_id: number;

    food_name: string;

    price: number;

    quantity: number;

    total_amount: number;

    unit_name: string;

    day: string;

    table_id: number;

    table_name: string;

    customer_slot_number: number;

    constructor(baseEntity?: TmsRestaurantDetailFoodReportEntity) {
        this.order_id = baseEntity? +baseEntity.order_id : 0;
        this.employee_id = baseEntity? +baseEntity.employee_id : 0;
        this.employee_name = baseEntity? baseEntity.employee_name : "";
        this.food_id = baseEntity? +baseEntity.food_id : 0;
        this.food_name = baseEntity? baseEntity.food_name : "";
        this.price = baseEntity? +baseEntity.price : 0;
        this.quantity = baseEntity? +baseEntity.quantity : 0;
        this.total_amount = baseEntity? +baseEntity.total_amount : 0;
        this.unit_name = baseEntity? baseEntity.unit_name : "";
        this.day = baseEntity? baseEntity.day : "";
        this.table_id = baseEntity? +baseEntity.table_id : 0;
        this.table_name = baseEntity? baseEntity.table_name : "";
        this.customer_slot_number = baseEntity? +baseEntity.customer_slot_number : 0;
    }

    public mapToList(baseEntitise?: TmsRestaurantDetailFoodReportEntity[]): TmsRestaurantDetailFoodReportResponse[]{
        let data: TmsRestaurantDetailFoodReportResponse[] = [];
        baseEntitise.forEach(e => {
            data.push(new TmsRestaurantDetailFoodReportResponse(e))
        });

        return data;
    }

}