import { RestaurantBrandDataModel } from "../restaurant-brand.entity/restaurant-brand.data.model.entity";
import { RestaurantBrandBusinessTypeResponse } from "./restaurant-brand-business-type.response";
import { RestaurantBrandSettingResponse } from "./restaurant-brand.setting.response";
export declare class RestaurantBrandDataModelResponse {
    id: number;
    restaurant_id: number;
    customer_partner_id: number;
    name: string;
    logo_url: string;
    banner: string;
    description: string;
    setting: RestaurantBrandSettingResponse;
    restaurant_brand_business_type: RestaurantBrandBusinessTypeResponse[];
    status: number;
    total_branches: number;
    service_restaurant_level_id: number;
    service_restaurant_level_type: number;
    created_at: string;
    updated_at: string;
    constructor(restaurantBrandDataModel?: RestaurantBrandDataModel);
    mapToList(data: RestaurantBrandDataModel[]): {};
}
