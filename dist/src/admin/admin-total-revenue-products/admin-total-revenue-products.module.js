"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AdminTotalRevenueProductsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminTotalRevenueProductsModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const admin_total_revenue_products_controller_1 = require("./admin-total-revenue-products.controller");
const admin_total_revenue_products_entity_1 = require("./admin-total-revenue-products.entity/admin-total-revenue-products.entity");
const admin_total_revenue_products_service_1 = require("./admin-total-revenue-products.service");
let AdminTotalRevenueProductsModule = AdminTotalRevenueProductsModule_1 = class AdminTotalRevenueProductsModule {
};
AdminTotalRevenueProductsModule = AdminTotalRevenueProductsModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([admin_total_revenue_products_entity_1.AdminTotalRevenueProductsDataModelEntity]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            AdminTotalRevenueProductsModule_1,
        ],
        controllers: [admin_total_revenue_products_controller_1.AdminTotalRevenueProductsController],
        providers: [admin_total_revenue_products_service_1.AdminTotalRevenueProductsService],
        exports: [admin_total_revenue_products_service_1.AdminTotalRevenueProductsService]
    })
], AdminTotalRevenueProductsModule);
exports.AdminTotalRevenueProductsModule = AdminTotalRevenueProductsModule;
//# sourceMappingURL=admin-total-revenue-products.module.js.map