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
exports.RestaurantBrandController = void 0;
const common_1 = require("@nestjs/common");
const utils_response_common_1 = require("../utils.common/utils.response.common/utils.response.common");
const restaurant_brand_response_1 = require("./restaurant-brand.response/restaurant-brand.response");
const restaurant_brand_service_1 = require("./restaurant-brand.service");
const restaurant_brand_list_dto_1 = require("./restaurant-brand.dto/restaurant-brand.list.dto");
let RestaurantBrandController = class RestaurantBrandController {
    constructor(restaurantBrandService) {
        this.restaurantBrandService = restaurantBrandService;
    }
    async getListRestaurant(restaurantBrandQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let restaurantBrand = await this.restaurantBrandService.getListRestaurantBrand(restaurantBrandQueryDTO.restaurant_id, restaurantBrandQueryDTO.status);
        response.setData(new restaurant_brand_response_1.RestaurantBrandDataModelResponse().mapToList(restaurantBrand));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
    async getDetailRestaurant(id, res) {
        let response = new utils_response_common_1.ResponseData();
        let restaurant = await this.restaurantBrandService.getDetailRestaurantBrand(id);
        response.setData(new restaurant_brand_response_1.RestaurantBrandDataModelResponse(restaurant));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_brand_list_dto_1.RestaurantBrandQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], RestaurantBrandController.prototype, "getListRestaurant", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RestaurantBrandController.prototype, "getDetailRestaurant", null);
RestaurantBrandController = __decorate([
    (0, common_1.Controller)('api/restaurant-brand'),
    __metadata("design:paramtypes", [restaurant_brand_service_1.RestaurantBrandService])
], RestaurantBrandController);
exports.RestaurantBrandController = RestaurantBrandController;
//# sourceMappingURL=restaurant-brand.controller.js.map