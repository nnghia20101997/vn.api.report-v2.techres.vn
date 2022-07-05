"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AdminAdvertisingRevenueModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAdvertisingRevenueModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const admin_advertising_revenue_controller_1 = require("./admin-advertising-revenue.controller");
const admin_advertising_revenue_entity_1 = require("./admin-advertising-revenue.entity/admin-advertising-revenue.entity");
const admin_advertising_revenue_service_1 = require("./admin-advertising-revenue.service");
let AdminAdvertisingRevenueModule = AdminAdvertisingRevenueModule_1 = class AdminAdvertisingRevenueModule {
};
AdminAdvertisingRevenueModule = AdminAdvertisingRevenueModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([admin_advertising_revenue_entity_1.AdminAdvertisingRevenueEntity]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            AdminAdvertisingRevenueModule_1,
        ],
        controllers: [admin_advertising_revenue_controller_1.AdminAdvertisingRevenueController],
        providers: [admin_advertising_revenue_service_1.AdminAdvertisingRevenueService],
        exports: [admin_advertising_revenue_service_1.AdminAdvertisingRevenueService]
    })
], AdminAdvertisingRevenueModule);
exports.AdminAdvertisingRevenueModule = AdminAdvertisingRevenueModule;
//# sourceMappingURL=admin-advertising-revenue.module.js.map