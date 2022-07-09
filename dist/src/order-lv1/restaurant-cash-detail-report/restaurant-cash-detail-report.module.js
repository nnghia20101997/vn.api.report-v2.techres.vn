"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RestaurantCashDetailReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantCashDetailReportModule = void 0;
const common_1 = require("@nestjs/common");
const restaurant_cash_detail_report_service_1 = require("./restaurant-cash-detail-report.service");
const restaurant_cash_detail_report_controller_1 = require("./restaurant-cash-detail-report.controller");
const typeorm_1 = require("@nestjs/typeorm");
const restaurant_cash_detail_report_entity_1 = require("./restaurant-cash-detail-report.entity/restaurant-cash-detail-report.entity");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
let RestaurantCashDetailReportModule = RestaurantCashDetailReportModule_1 = class RestaurantCashDetailReportModule {
};
RestaurantCashDetailReportModule = RestaurantCashDetailReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                restaurant_cash_detail_report_entity_1.RestaurantCashDetailReportEntity
            ]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            RestaurantCashDetailReportModule_1,
        ],
        providers: [restaurant_cash_detail_report_service_1.RestaurantCashDetailReportService],
        controllers: [restaurant_cash_detail_report_controller_1.RestaurantCashDetailReportController]
    })
], RestaurantCashDetailReportModule);
exports.RestaurantCashDetailReportModule = RestaurantCashDetailReportModule;
//# sourceMappingURL=restaurant-cash-detail-report.module.js.map