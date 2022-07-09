"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RestaurantCustomerReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantCustomerReportModule = void 0;
const common_1 = require("@nestjs/common");
const restaurant_customer_report_service_1 = require("./restaurant-customer-report.service");
const restaurant_customer_report_controller_1 = require("./restaurant-customer-report.controller");
const restaurant_customer_report_entity_1 = require("./restaurant-customer-report.entity/restaurant-customer-report.entity");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
let RestaurantCustomerReportModule = RestaurantCustomerReportModule_1 = class RestaurantCustomerReportModule {
};
RestaurantCustomerReportModule = RestaurantCustomerReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                restaurant_customer_report_entity_1.RestaurantCustomerReportEntity
            ]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            RestaurantCustomerReportModule_1,
        ],
        providers: [restaurant_customer_report_service_1.RestaurantCustomerReportService],
        controllers: [restaurant_customer_report_controller_1.RestaurantCustomerReportController]
    })
], RestaurantCustomerReportModule);
exports.RestaurantCustomerReportModule = RestaurantCustomerReportModule;
//# sourceMappingURL=restaurant-customer-report.module.js.map