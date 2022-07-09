"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantBrandBusinessTypeResponse = void 0;
class RestaurantBrandBusinessTypeResponse {
    constructor(restaurantBrandBusinessTypeDataModel) {
        this.id = restaurantBrandBusinessTypeDataModel ? restaurantBrandBusinessTypeDataModel.id : 0;
        this.name = restaurantBrandBusinessTypeDataModel ? restaurantBrandBusinessTypeDataModel.name : "";
        this.description = restaurantBrandBusinessTypeDataModel ? restaurantBrandBusinessTypeDataModel.description : "";
        this.is_hidden = restaurantBrandBusinessTypeDataModel ? restaurantBrandBusinessTypeDataModel.is_hidden : 0;
        this.created_at = restaurantBrandBusinessTypeDataModel ? restaurantBrandBusinessTypeDataModel.created_at : '';
        this.updated_at = restaurantBrandBusinessTypeDataModel ? restaurantBrandBusinessTypeDataModel.updated_at : '';
    }
    mapToList(data) {
        let response = [];
        data.forEach(e => {
            response.push(new RestaurantBrandBusinessTypeResponse(e));
        });
        return response;
    }
}
exports.RestaurantBrandBusinessTypeResponse = RestaurantBrandBusinessTypeResponse;
//# sourceMappingURL=restaurant-brand-business-type.response.js.map