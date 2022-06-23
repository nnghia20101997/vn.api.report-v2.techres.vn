import { RestaurantDataModel } from "../restaurant.entity/restaurant.data.model.entity";
import { RestaurantSettingResponse } from "./restaurant-setting.response";
export declare class RestaurantDataModelDetailResponse {
    id: number;
    restaurant_name: string;
    brand_name: string;
    name: string;
    email: string;
    phone: string;
    info: string;
    address: string;
    is_done_setup: number;
    setting: RestaurantSettingResponse;
    is_public: number;
    logo: string;
    banner: string;
    image_urls: string;
    status: number;
    total_brands: number;
    service_restaurant_level_id: number;
    created_at: string;
    updated_at: string;
    constructor(restaurantDataModel?: RestaurantDataModel);
    mapToList(data: RestaurantDataModel[]): RestaurantDataModelDetailResponse[];
}
