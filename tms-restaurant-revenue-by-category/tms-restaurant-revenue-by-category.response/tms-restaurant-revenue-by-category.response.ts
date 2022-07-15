import { TmsRestaurantRevenueByCategoryReportEntity } from "../tms-restaurant-revenue-by-category.entity/tms-restaurant-revenue-by-category.entity";

export class TmsRestaurantRevenueByCategoryReportResponse {

    category_id: number;

    category_name: string;

    total_amount: number;

    total_original_amount: number;

    profit: number;

    profit_ratio: number;

    constructor(baseEntity?: TmsRestaurantRevenueByCategoryReportEntity) {
        this.category_id = baseEntity? +baseEntity.category_id : 0;
        this.category_name = baseEntity? baseEntity.category_name : "";
        this.total_amount = baseEntity? +baseEntity.total_amount : 0;
        this.total_original_amount = baseEntity? +baseEntity.total_original_amount : 0;
        this.profit = baseEntity? +baseEntity.profit : 0;
        this.profit_ratio = baseEntity? +baseEntity.profit_ratio : 0;
    }

    public mapToList(baseEntities: TmsRestaurantRevenueByCategoryReportEntity[]): TmsRestaurantRevenueByCategoryReportResponse[]{
        let data: TmsRestaurantRevenueByCategoryReportResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new TmsRestaurantRevenueByCategoryReportResponse(e))
        });

        return data;
    }

}