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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantBrandService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utils_store_procedure_exception_common_1 = require("../utils.common/utils.exception.common/utils.store-procedure-exception.common");
const utils_store_procedure_result_common_1 = require("../utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common");
const typeorm_2 = require("typeorm");
const restaurant_brand_data_model_entity_1 = require("./restaurant-brand.entity/restaurant-brand.data.model.entity");
let RestaurantBrandService = class RestaurantBrandService {
    constructor(restaurantBrand) {
        this.restaurantBrand = restaurantBrand;
    }
    async getListRestaurantBrand(restaurantId, status) {
        let restaurantBrand = await this.restaurantBrand.query('CALL sp_get_list_restaurant_brands(?,?, @status, @message); SELECT @status AS status , @message AS message', [
            restaurantId,
            status
        ]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(restaurantBrand);
        let data = new utils_store_procedure_result_common_1.StoreProcedureResult().getResultList(restaurantBrand);
        return data;
    }
    async getDetailRestaurantBrand(id) {
        let restaurantBrand = await this.restaurantBrand.query('CALL sp_get_detail_restaurant_brand(?,@status,@message); SELECT @status AS status , @message AS message', [
            id
        ]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(restaurantBrand);
        let data = new utils_store_procedure_result_common_1.StoreProcedureResult().getResultDetail(restaurantBrand);
        return data;
    }
};
RestaurantBrandService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(restaurant_brand_data_model_entity_1.RestaurantBrandDataModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], RestaurantBrandService);
exports.RestaurantBrandService = RestaurantBrandService;
//# sourceMappingURL=restaurant-brand.service.js.map