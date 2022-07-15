export class TmsRestaurantSummaryFoodRevenueByTimeReportDto {
    readonly restaurant_id: number;
	readonly restaurant_brand_id: number = -1;
	readonly branch_id: number = -1;
	readonly category_type: number = -1;
	readonly category_id: number;
	readonly is_gift: number = -1;
	readonly is_combo: number  = -1;
	readonly is_cancelled_food: number  = -1;
	readonly is_take_away_food: number  = -1;
	readonly is_goods: number  = -1;
    readonly report_type: number;
}