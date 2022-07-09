import { RestaurantBrandBusinessTypeDataModel } from "../restaurant-brand.entity/restaurant-brand-business-type.entity";
export declare class RestaurantBrandBusinessTypeResponse {
    id: number;
    name: string;
    description: string;
    is_hidden: number;
    created_at: string;
    updated_at: string;
    constructor(restaurantBrandBusinessTypeDataModel?: RestaurantBrandBusinessTypeDataModel);
    mapToList(data: RestaurantBrandBusinessTypeDataModel[]): {};
}
