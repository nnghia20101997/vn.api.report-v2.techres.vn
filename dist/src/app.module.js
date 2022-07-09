"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const branch_module_1 = require("./branch/branch.module");
const restaurant_brand_module_1 = require("./restaurant-brand/restaurant-brand.module");
const restaurant_module_1 = require("./restaurant/restaurant.module");
const utils_bearer_token_common_1 = require("./utils.common/utils.middleware.common/utils.bearer-token.common");
const supplier_overview_report_module_1 = require("./supplier/supplier-overview-report/supplier-overview-report.module");
const supplier_order_list_report_module_1 = require("./supplier/supplier-order-list-report/supplier-order-list-report.module");
const supplier_revenue_report_by_time_module_1 = require("./supplier/supplier-revenue-report-by-time/supplier-revenue-report-by-time.module");
const supplier_warehouse_sesssion_report_module_1 = require("./supplier/supplier-warehouse-sesssion-report/supplier-warehouse-sesssion-report.module");
const supplier_warehouse_material_report_module_1 = require("./supplier/supplier-warehouse-material-report/supplier-warehouse-material-report.module");
const admin_customer_aloline_report_module_1 = require("./admin/admin-customer-aloline-report/admin-customer-aloline-report.module");
const admin_top_ten_product_best_seller_detail_module_1 = require("./admin/admin-top-ten-product-best-seller-detail/admin-top-ten-product-best-seller-detail.module");
const admin_gravity_product_best_seller_module_1 = require("./admin/admin-gravity-product-best-seller/admin-gravity-product-best-seller.module");
const admin_total_revenue_products_module_1 = require("./admin/admin-total-revenue-products/admin-total-revenue-products.module");
const admin_advertising_revenue_module_1 = require("./admin/admin-advertising-revenue/admin-advertising-revenue.module");
const admin_branch_report_module_1 = require("./admin/admin-branch-report/admin-branch-report.module");
const admin_top_best_saler_report_module_1 = require("./admin/admin-top-best-saler-report/admin-top-best-saler-report.module");
const admin_saler_detail_report_module_1 = require("./admin/admin-saler-detail-report/admin-saler-detail-report.module");
const admin_best_saler_gravity_report_module_1 = require("./admin/admin-best-saler-gravity-report/admin-best-saler-gravity-report.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(utils_bearer_token_common_1.AuthenticationMiddleware)
            .forRoutes({ path: "/", method: common_1.RequestMethod.ALL });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: ".env",
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: ["dist/**/*.entity{.ts,.js}"],
                multipleStatements: true,
                dateStrings: true,
            }),
            mongoose_1.MongooseModule.forRoot(`${process.env.DB_MONGO_CONNECTION}://${process.env.DB_MONGO_USERNAME}:${encodeURIComponent(process.env.DB_MONGO_PASSWORD)}@${process.env.DB_MONGO_HOST}:${process.env.DB_MONGO_PORT}/${process.env.DB_MONGO_NAME}`),
            auth_module_1.AuthModule,
            restaurant_module_1.RestaurantModule,
            restaurant_brand_module_1.RestaurantBrandModule,
            supplier_order_list_report_module_1.SupplierOrderListReportModule,
            supplier_overview_report_module_1.SupplierOverviewReportModule,
            supplier_revenue_report_by_time_module_1.SupplierRevenueReportByTimeModule,
            supplier_warehouse_sesssion_report_module_1.SupplierWarehouseSesssionReportModule,
            supplier_warehouse_material_report_module_1.SupplierWarehouseMaterialReportModule,
            admin_advertising_revenue_module_1.AdminAdvertisingRevenueModule,
            admin_customer_aloline_report_module_1.AdminCustomerAlolineReportModule,
            admin_top_ten_product_best_seller_detail_module_1.AdminTopTenProductBestSellerDetailModule,
            admin_gravity_product_best_seller_module_1.AdminGravityProductBestSellerModule,
            admin_total_revenue_products_module_1.AdminTotalRevenueProductsModule,
            branch_module_1.BranchModule,
            admin_branch_report_module_1.AdminBranchReportModule,
            admin_top_best_saler_report_module_1.AdminTopBestSalerReportModule,
            admin_saler_detail_report_module_1.AdminSalerDetailReportModule,
            admin_best_saler_gravity_report_module_1.AdminBestSalerGravityReportModule,
        ],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map