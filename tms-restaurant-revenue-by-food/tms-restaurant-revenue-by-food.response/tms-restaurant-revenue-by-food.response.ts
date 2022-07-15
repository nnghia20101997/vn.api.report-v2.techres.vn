import { TmsRestaurantRevenueByFoodReportEntity } from "../tms-restaurant-revenue-by-food.entity/tms-restaurant-revenue-by-food.entity";

export class TmsRestaurantRevenueByFoodReportResponse {

    food_id: number;

    food_name: string;

    food_avatar: string;

    food_avatar_thump: string;

    category_id: number;

    category_name: string;

    category_type: number;

    unit_name: string;

    quantity: number;

    original_price: number;

    price: number;

    total_original_amount: number;

    total_amount: number;

    profit:number;

    profit_ratio: number;

    constructor(baseEntity?: TmsRestaurantRevenueByFoodReportEntity) {
        this.food_id = baseEntity? +baseEntity.food_id : 0;
        this.food_name = baseEntity? baseEntity.food_name : "";
        this.food_avatar = baseEntity? baseEntity.food_avatar : "";
        this.food_avatar_thump = baseEntity? baseEntity.food_avatar_thump : "";
        this.category_id = baseEntity? +baseEntity.category_id : 0;
        this.category_name = baseEntity? baseEntity.category_name : "";
        this.category_type = baseEntity? +baseEntity.category_type : 0;
        this.unit_name = baseEntity? baseEntity.unit_name : "";
        this.quantity = baseEntity? +baseEntity.quantity : 0;
        this.original_price = baseEntity? +baseEntity.original_price : 0;
        this.price = baseEntity? +baseEntity.price : 0;
        this.total_original_amount = baseEntity? +baseEntity.total_original_amount : 0;
        this.total_amount = baseEntity? +baseEntity.total_amount : 0;
        this.profit = baseEntity? +baseEntity.profit : 0;
        this.profit_ratio = baseEntity? +baseEntity.profit_ratio : 0;
    }

    public mapToList(baseEntities: TmsRestaurantRevenueByFoodReportEntity[]): TmsRestaurantRevenueByFoodReportResponse[] {
        let data: TmsRestaurantRevenueByFoodReportResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new TmsRestaurantRevenueByFoodReportResponse(e))
        });
        return data;
    }
}