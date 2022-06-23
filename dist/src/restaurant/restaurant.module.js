"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RestaurantModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantModule = void 0;
const common_1 = require("@nestjs/common");
const restaurant_service_1 = require("./restaurant.service");
const restaurant_controller_1 = require("./restaurant.controller");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const restaurant_entity_1 = require("./restaurant.entity/restaurant.entity");
let RestaurantModule = RestaurantModule_1 = class RestaurantModule {
};
RestaurantModule = RestaurantModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([restaurant_entity_1.Restaurant]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            RestaurantModule_1
        ],
        providers: [restaurant_service_1.RestaurantService],
        controllers: [restaurant_controller_1.RestaurantController]
    })
], RestaurantModule);
exports.RestaurantModule = RestaurantModule;
//# sourceMappingURL=restaurant.module.js.map