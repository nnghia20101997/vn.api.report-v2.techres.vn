"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AdminAdvertisingRevenueDetailModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAdvertisingRevenueDetailModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const admin_advertising_revenue_detail_controller_1 = require("./admin-advertising-revenue-detail.controller");
const admin_advertising_revenue_detail_entity_1 = require("./admin-advertising-revenue-detail.entity/admin-advertising-revenue-detail.entity");
const admin_advertising_revenue_detail_service_1 = require("./admin-advertising-revenue-detail.service");
let AdminAdvertisingRevenueDetailModule = AdminAdvertisingRevenueDetailModule_1 = class AdminAdvertisingRevenueDetailModule {
};
AdminAdvertisingRevenueDetailModule = AdminAdvertisingRevenueDetailModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([admin_advertising_revenue_detail_entity_1.AdminAdvertisingRevenueDetailDataModelEntity]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            AdminAdvertisingRevenueDetailModule_1,
        ],
        controllers: [admin_advertising_revenue_detail_controller_1.AdminAdvertisingRevenueDetailController],
        providers: [admin_advertising_revenue_detail_service_1.AdminAdvertisingRevenueDetailService],
        exports: [admin_advertising_revenue_detail_service_1.AdminAdvertisingRevenueDetailService]
    })
], AdminAdvertisingRevenueDetailModule);
exports.AdminAdvertisingRevenueDetailModule = AdminAdvertisingRevenueDetailModule;
//# sourceMappingURL=admin-advertising-revenue-detail.module.js.map