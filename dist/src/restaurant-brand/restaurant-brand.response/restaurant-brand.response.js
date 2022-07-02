"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantBrandDataModelResponse = void 0;
const utils_format_time_common_1 = require("../../utils.common/utils.format-time.common/utils.format-time.common");
const restaurant_brand_business_type_response_1 = require("./restaurant-brand-business-type.response");
const restaurant_brand_setting_response_1 = require("./restaurant-brand.setting.response");
class RestaurantBrandDataModelResponse {
    constructor(restaurantBrandDataModel) {
        this.id = restaurantBrandDataModel ? restaurantBrandDataModel.id : 0;
        this.restaurant_id = restaurantBrandDataModel ? restaurantBrandDataModel.restaurant_id : 0;
        this.customer_partner_id = restaurantBrandDataModel ? restaurantBrandDataModel.customer_partner_id : 0;
        this.name = restaurantBrandDataModel ? restaurantBrandDataModel.name : "";
        this.logo_url = restaurantBrandDataModel ? restaurantBrandDataModel.logo_url : "";
        this.banner = restaurantBrandDataModel ? restaurantBrandDataModel.banner : "";
        this.description = restaurantBrandDataModel ? restaurantBrandDataModel.description : "";
        this.setting = restaurantBrandDataModel ? new restaurant_brand_setting_response_1.RestaurantBrandSettingResponse(JSON.parse(restaurantBrandDataModel.setting)) : null;
        this.restaurant_brand_business_type = restaurantBrandDataModel ? new restaurant_brand_business_type_response_1.RestaurantBrandBusinessTypeResponse().mapToList(JSON.parse(restaurantBrandDataModel.restaurant_brand_business_type)) : [];
        this.status = restaurantBrandDataModel ? restaurantBrandDataModel.status : 0;
        this.total_branches = restaurantBrandDataModel ? restaurantBrandDataModel.total_branches : 0;
        this.service_restaurant_level_id = restaurantBrandDataModel ? restaurantBrandDataModel.service_restaurant_level_id : 0;
        this.service_restaurant_level_type = restaurantBrandDataModel ? restaurantBrandDataModel.service_restaurant_level_type : 0;
        this.created_at = restaurantBrandDataModel ? utils_format_time_common_1.UtilsDate.formatDateTimeVNToString(restaurantBrandDataModel.created_at) : '';
        this.updated_at = restaurantBrandDataModel ? utils_format_time_common_1.UtilsDate.formatDateTimeVNToString(restaurantBrandDataModel.updated_at) : '';
    }
    mapToList(data) {
        let response = [];
        data.forEach(e => {
            response.push(new RestaurantBrandDataModelResponse(e));
        });
        return response;
    }
}
exports.RestaurantBrandDataModelResponse = RestaurantBrandDataModelResponse;
//# sourceMappingURL=restaurant-brand.response.js.map