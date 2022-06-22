import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { RestaurantBrandBusinessTypeDataModel } from "../restaurant-brand.entity/restaurant-brand-business-type.entity";

export class RestaurantBrandBusinessTypeResponse {
    id: number;
    name: string;
    description: string;
    is_hidden: number;
    created_at: string;
    updated_at: string;

    constructor(restaurantBrandBusinessTypeDataModel? : RestaurantBrandBusinessTypeDataModel){
        this.id = restaurantBrandBusinessTypeDataModel ? restaurantBrandBusinessTypeDataModel.id : 0;
        this.name = restaurantBrandBusinessTypeDataModel ? restaurantBrandBusinessTypeDataModel.name : "";
        this.description = restaurantBrandBusinessTypeDataModel ? restaurantBrandBusinessTypeDataModel.description : "";
        this.is_hidden = restaurantBrandBusinessTypeDataModel ? restaurantBrandBusinessTypeDataModel.is_hidden : 0;
        this.created_at= restaurantBrandBusinessTypeDataModel ? restaurantBrandBusinessTypeDataModel.created_at : ''; 
        this.updated_at= restaurantBrandBusinessTypeDataModel ? restaurantBrandBusinessTypeDataModel.updated_at : ''; 
    }

    public mapToList(data: RestaurantBrandBusinessTypeDataModel[]) {
        let response: RestaurantBrandBusinessTypeResponse[] = [];
        data.forEach(e => {
            response.push(new RestaurantBrandBusinessTypeResponse(e));
        })
        return response;
    }
}