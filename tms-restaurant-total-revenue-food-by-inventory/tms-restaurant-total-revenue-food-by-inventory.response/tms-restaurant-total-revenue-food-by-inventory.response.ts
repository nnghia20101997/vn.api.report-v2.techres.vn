import { TmsRestaurantTotalRevenueFoodByInventoryReportEntity } from "../tms-restaurant-total-revenue-food-by-inventory.entity/tms-restaurant-total-revenue-food-by-inventory.entity";

export class TmsRestaurantTotalRevenueFoodByInventoryReportResponse {
    total_amount: number;
    total_food_material_inventory_amount: number;
    total_food_goods_inventory_amount: number;

    constructor(baseEntity?: TmsRestaurantTotalRevenueFoodByInventoryReportEntity) {
        this.total_amount = baseEntity? +baseEntity.total_amount : 0;
        this.total_food_material_inventory_amount = baseEntity? +baseEntity.total_food_material_inventory_amount : 0;
        this.total_food_goods_inventory_amount = baseEntity? +baseEntity.total_food_goods_inventory_amount : 0;
    }

    public mapToList(baseEntities?: TmsRestaurantTotalRevenueFoodByInventoryReportEntity[]): TmsRestaurantTotalRevenueFoodByInventoryReportResponse[] {
        let data: TmsRestaurantTotalRevenueFoodByInventoryReportResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new TmsRestaurantTotalRevenueFoodByInventoryReportResponse(e))
        });

        return data;
    }
}