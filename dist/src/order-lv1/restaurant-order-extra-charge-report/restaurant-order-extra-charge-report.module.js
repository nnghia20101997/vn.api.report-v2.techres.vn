"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RestaurantOrderExtraChargeReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantOrderExtraChargeReportModule = void 0;
const common_1 = require("@nestjs/common");
const restaurant_order_extra_charge_report_service_1 = require("./restaurant-order-extra-charge-report.service");
const restaurant_order_extra_charge_report_controller_1 = require("./restaurant-order-extra-charge-report.controller");
const typeorm_1 = require("@nestjs/typeorm");
const restaurant_order_extra_charge_report_entity_1 = require("./restaurant-order-extra-charge-report.entity/restaurant-order-extra-charge-report.entity");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
let RestaurantOrderExtraChargeReportModule = RestaurantOrderExtraChargeReportModule_1 = class RestaurantOrderExtraChargeReportModule {
};
RestaurantOrderExtraChargeReportModule = RestaurantOrderExtraChargeReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([restaurant_order_extra_charge_report_entity_1.RestaurantOrderExtraChargeReportEntity
            ]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            RestaurantOrderExtraChargeReportModule_1
        ],
        providers: [restaurant_order_extra_charge_report_service_1.RestaurantOrderExtraChargeReportService],
        controllers: [restaurant_order_extra_charge_report_controller_1.RestaurantOrderExtraChargeReportController]
    })
], RestaurantOrderExtraChargeReportModule);
exports.RestaurantOrderExtraChargeReportModule = RestaurantOrderExtraChargeReportModule;
//# sourceMappingURL=restaurant-order-extra-charge-report.module.js.map