"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantDataModelDetailResponse = void 0;
const utils_format_time_common_1 = require("../../utils.common/utils.format-time.common/utils.format-time.common");
const restaurant_setting_response_1 = require("./restaurant-setting.response");
class RestaurantDataModelDetailResponse {
    constructor(restaurantDataModel) {
        this.id = restaurantDataModel ? +restaurantDataModel.id : 0;
        this.restaurant_name = restaurantDataModel ? restaurantDataModel.restaurant_name : '';
        this.brand_name = restaurantDataModel ? restaurantDataModel.brand_name : '';
        this.name = restaurantDataModel ? restaurantDataModel.name : '';
        this.email = restaurantDataModel ? restaurantDataModel.email : '';
        this.phone = restaurantDataModel ? restaurantDataModel.phone : '';
        this.info = restaurantDataModel ? restaurantDataModel.info : '';
        this.address = restaurantDataModel ? restaurantDataModel.address : '';
        this.service_restaurant_level_id = restaurantDataModel ? +restaurantDataModel.service_restaurant_level_id : 0;
        this.is_done_setup = restaurantDataModel ? +restaurantDataModel.is_done_setup : 0;
        this.setting = restaurantDataModel ? new restaurant_setting_response_1.RestaurantSettingResponse(restaurantDataModel.setting) : null;
        this.is_public = restaurantDataModel ? +restaurantDataModel.is_public : 0;
        this.logo = restaurantDataModel ? restaurantDataModel.logo : '';
        this.banner = restaurantDataModel ? restaurantDataModel.banner : '';
        this.image_urls = restaurantDataModel ? JSON.parse(`${restaurantDataModel.image_urls}`) : '';
        this.status = restaurantDataModel ? +restaurantDataModel.status : 0;
        this.total_brands = restaurantDataModel ? +restaurantDataModel.total_brands : 0;
        this.created_at = restaurantDataModel ? utils_format_time_common_1.UtilsDate.formatDateTimeVNToString(restaurantDataModel.created_at) : '';
        this.updated_at = restaurantDataModel ? utils_format_time_common_1.UtilsDate.formatDateTimeVNToString(restaurantDataModel.updated_at) : '';
    }
    mapToList(data) {
        let response = [];
        data.forEach(e => {
            response.push(new RestaurantDataModelDetailResponse(e));
        });
        return response;
    }
}
exports.RestaurantDataModelDetailResponse = RestaurantDataModelDetailResponse;
//# sourceMappingURL=restaurant.data.model.response.js.map