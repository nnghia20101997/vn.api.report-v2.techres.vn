"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RestaurantBrandModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantBrandModule = void 0;
const common_1 = require("@nestjs/common");
const restaurant_brand_service_1 = require("./restaurant-brand.service");
const restaurant_brand_controller_1 = require("./restaurant-brand.controller");
const restaurant_brand_data_model_entity_1 = require("./restaurant-brand.entity/restaurant-brand.data.model.entity");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
let RestaurantBrandModule = RestaurantBrandModule_1 = class RestaurantBrandModule {
};
RestaurantBrandModule = RestaurantBrandModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([restaurant_brand_data_model_entity_1.RestaurantBrandDataModel]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            RestaurantBrandModule_1
        ],
        providers: [restaurant_brand_service_1.RestaurantBrandService],
        controllers: [restaurant_brand_controller_1.RestaurantBrandController]
    })
], RestaurantBrandModule);
exports.RestaurantBrandModule = RestaurantBrandModule;
//# sourceMappingURL=restaurant-brand.module.js.map