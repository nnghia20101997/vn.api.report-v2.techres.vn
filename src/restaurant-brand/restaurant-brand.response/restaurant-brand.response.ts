import { log } from "console";
import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { RestaurantBrandDataModel } from "../restaurant-brand.entity/restaurant-brand.data.model.entity";
import { RestaurantBrandBusinessTypeResponse } from "./restaurant-brand-business-type.response";
import { RestaurantBrandSettingResponse } from "./restaurant-brand.setting.response";

export class RestaurantBrandDataModelResponse {
        id : number;
        restaurant_id: number;
        customer_partner_id: number;
        name: string;
        logo_url: string;
        banner: string;
        description: string;
        setting : RestaurantBrandSettingResponse
        restaurant_brand_business_type: RestaurantBrandBusinessTypeResponse[];
        status : number;
        total_branches: number;
        service_restaurant_level_id: number;
        service_restaurant_level_type : number;
        created_at: string;
        updated_at: string;
				

        constructor(restaurantBrandDataModel?: RestaurantBrandDataModel) {
            this.id = restaurantBrandDataModel ? restaurantBrandDataModel.id : 0;  
            this.restaurant_id = restaurantBrandDataModel ? restaurantBrandDataModel.restaurant_id : 0  
            this.customer_partner_id = restaurantBrandDataModel ? restaurantBrandDataModel.customer_partner_id : 0;  
            this.name = restaurantBrandDataModel ? restaurantBrandDataModel.name : "";  
            this.logo_url = restaurantBrandDataModel ? restaurantBrandDataModel.logo_url : "";  
            this.banner = restaurantBrandDataModel ? restaurantBrandDataModel.banner : "";  
            this.description = restaurantBrandDataModel ? restaurantBrandDataModel.description : "";  
            this.setting = restaurantBrandDataModel ? new RestaurantBrandSettingResponse(JSON.parse(restaurantBrandDataModel.setting)) : null;
            this.restaurant_brand_business_type = restaurantBrandDataModel ? new RestaurantBrandBusinessTypeResponse().mapToList(JSON.parse(restaurantBrandDataModel.restaurant_brand_business_type)) : [];  
            this.status = restaurantBrandDataModel ? restaurantBrandDataModel.status : 0 
            this.total_branches= restaurantBrandDataModel ? restaurantBrandDataModel.total_branches : 0; 
            this.service_restaurant_level_id= restaurantBrandDataModel ? restaurantBrandDataModel.service_restaurant_level_id : 0;  
            this.service_restaurant_level_type = restaurantBrandDataModel ? restaurantBrandDataModel.service_restaurant_level_type : 0; 
            this.created_at= restaurantBrandDataModel ? UtilsDate.formatDateTimeVNToString(restaurantBrandDataModel.created_at) : ''; 
            this.updated_at= restaurantBrandDataModel ? UtilsDate.formatDateTimeVNToString(restaurantBrandDataModel.updated_at) : ''; 
        }

        public mapToList(data: RestaurantBrandDataModel[]) {
            let response: RestaurantBrandDataModelResponse[] = [];
            data.forEach(e => {
                response.push(new RestaurantBrandDataModelResponse(e));
            })
            return response;
        }
}