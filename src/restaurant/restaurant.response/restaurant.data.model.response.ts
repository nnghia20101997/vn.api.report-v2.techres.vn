import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { RestaurantDataModel } from "../restaurant.entity/restaurant.data.model.entity";
import { RestaurantSetting } from "../restaurant.entity/restaurant.setting";
import { RestaurantSettingResponse } from "./restaurant-setting.response";

export class RestaurantDataModelDetailResponse {
    id : number;
    restaurant_name : string;
    brand_name : string;
    name : string;
    email : string;
    phone : string;
    info : string;
    address : string;
    is_done_setup : number
    setting : RestaurantSettingResponse
    is_public : number;
    logo : string;
    banner : string;
    image_urls : string;
    status : number;
    total_brands: number;
    service_restaurant_level_id: number;
    created_at: string;
    updated_at: string;

    constructor(restaurantDataModel?: RestaurantDataModel) {

        this.id = restaurantDataModel ? + restaurantDataModel.id : 0;
        this.restaurant_name = restaurantDataModel ?  restaurantDataModel.restaurant_name : '';
        this.brand_name = restaurantDataModel ?  restaurantDataModel.brand_name : '';
        this.name = restaurantDataModel ? restaurantDataModel.name : '';
        this.email = restaurantDataModel ?  restaurantDataModel.email : ''; 
        this.phone = restaurantDataModel ? restaurantDataModel.phone : ''; 
        this.info = restaurantDataModel ? restaurantDataModel.info : ''; 
        this.address = restaurantDataModel ? restaurantDataModel.address : ''; 
        this.service_restaurant_level_id= restaurantDataModel ? + restaurantDataModel.service_restaurant_level_id : 0; 
        this.is_done_setup = restaurantDataModel ? + restaurantDataModel.is_done_setup: 0;
        this.setting = restaurantDataModel ? new RestaurantSettingResponse(restaurantDataModel.setting) : null;
        this.is_public = restaurantDataModel ? + restaurantDataModel.is_public : 0; 
        this.logo = restaurantDataModel ? restaurantDataModel.logo : '';
        this.banner = restaurantDataModel ? restaurantDataModel.banner : ''; 
        this.image_urls = restaurantDataModel ? JSON.parse(`${restaurantDataModel.image_urls}`) : '';  
        this.status = restaurantDataModel ? + restaurantDataModel.status : 0;
        this.total_brands= restaurantDataModel ? + restaurantDataModel.total_brands : 0; 
        this.created_at= restaurantDataModel ? UtilsDate.formatDateTimeVNToString(restaurantDataModel.created_at) : ''; 
        this.updated_at= restaurantDataModel ? UtilsDate.formatDateTimeVNToString(restaurantDataModel.updated_at) : ''; 
    }


    public mapToList(data: RestaurantDataModel[]) {
        let response: RestaurantDataModelDetailResponse[] = [];
        data.forEach(e => {
            response.push(new RestaurantDataModelDetailResponse(e));
        })
        return response;
    }

}