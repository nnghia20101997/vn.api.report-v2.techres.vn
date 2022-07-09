"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RestaurantDiscountFromOrderReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantDiscountFromOrderReportModule = void 0;
const common_1 = require("@nestjs/common");
const restaurant_discount_from_order_report_service_1 = require("./restaurant-discount-from-order-report.service");
const restaurant_discount_from_order_report_controller_1 = require("./restaurant-discount-from-order-report.controller");
const typeorm_1 = require("@nestjs/typeorm");
const restaurant_discount_from_order_report_entity_1 = require("./restaurant-discount-from-order-report.entity/restaurant-discount-from-order-report.entity");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
let RestaurantDiscountFromOrderReportModule = RestaurantDiscountFromOrderReportModule_1 = class RestaurantDiscountFromOrderReportModule {
};
RestaurantDiscountFromOrderReportModule = RestaurantDiscountFromOrderReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([restaurant_discount_from_order_report_entity_1.RestaurantDiscountFromOrderReportEntity
            ]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            RestaurantDiscountFromOrderReportModule_1
        ],
        providers: [restaurant_discount_from_order_report_service_1.RestaurantDiscountFromOrderReportService],
        controllers: [restaurant_discount_from_order_report_controller_1.RestaurantDiscountFromOrderReportController]
    })
], RestaurantDiscountFromOrderReportModule);
exports.RestaurantDiscountFromOrderReportModule = RestaurantDiscountFromOrderReportModule;
//# sourceMappingURL=restaurant-discount-from-order-report.module.js.map