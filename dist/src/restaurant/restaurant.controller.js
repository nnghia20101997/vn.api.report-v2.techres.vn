"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantController = void 0;
const common_1 = require("@nestjs/common");
const restaurant_service_1 = require("./restaurant.service");
const utils_response_common_1 = require("../utils.common/utils.response.common/utils.response.common");
const restaurant_data_model_response_1 = require("./restaurant.response/restaurant.data.model.response");
let RestaurantController = class RestaurantController {
    constructor(restaurantService) {
        this.restaurantService = restaurantService;
    }
    async getListRestaurant(status, res) {
        let response = new utils_response_common_1.ResponseData();
        let restaurant = await this.restaurantService.getListRestaurants(0);
        response.setData(new restaurant_data_model_response_1.RestaurantDataModelDetailResponse().mapToList(restaurant));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
    async getDetailRestaurant(id, res) {
        let response = new utils_response_common_1.ResponseData();
        let restaurant = await this.restaurantService.getDetailRestaurant(id);
        response.setData(new restaurant_data_model_response_1.RestaurantDataModelDetailResponse(restaurant));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "getListRestaurant", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "getDetailRestaurant", null);
RestaurantController = __decorate([
    (0, common_1.Controller)('api/restaurant'),
    __metadata("design:paramtypes", [restaurant_service_1.RestaurantService])
], RestaurantController);
exports.RestaurantController = RestaurantController;
//# sourceMappingURL=restaurant.controller.js.map