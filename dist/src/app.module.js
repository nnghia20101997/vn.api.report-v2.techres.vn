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
const admin_customer_aloline_report_module_1 = require("./admin/admin-customer-aloline-report/admin-customer-aloline-report.module");
const admin_top_ten_product_best_seller_detail_module_1 = require("./admin/admin-top-ten-product-best-seller-detail/admin-top-ten-product-best-seller-detail.module");
const admin_gravity_product_best_seller_module_1 = require("./admin/admin-gravity-product-best-seller/admin-gravity-product-best-seller.module");
const admin_total_revenue_products_module_1 = require("./admin/admin-total-revenue-products/admin-total-revenue-products.module");
const admin_advertising_revenue_module_1 = require("./admin/admin-advertising-revenue/admin-advertising-revenue.module");
const admin_branch_report_module_1 = require("./admin/admin-branch-report/admin-branch-report.module");
const admin_top_best_saler_report_module_1 = require("./admin/admin-top-best-saler-report/admin-top-best-saler-report.module");
const admin_saler_detail_report_module_1 = require("./admin/admin-saler-detail-report/admin-saler-detail-report.module");
const admin_best_saler_gravity_report_module_1 = require("./admin/admin-best-saler-gravity-report/admin-best-saler-gravity-report.module");
const admin_advertising_revenue_detail_module_1 = require("./admin/admin-advertising-revenue-detail/admin-advertising-revenue-detail.module");
const admin_total_all_saler_report_module_1 = require("./admin/admin-total-all-saler-report/admin-total-all-saler-report.module");
const admin_location_with_best_sales_results_report_module_1 = require("./admin/admin-location-with-best-sales-results-report/admin-location-with-best-sales-results-report.module");
const admin_total_all_location_with_best_sales_results_report_module_1 = require("./admin/admin-total-all-location-with-best-sales-results-report/admin-total-all-location-with-best-sales-results-report.module");
const supplier_total_debt_and_debit_list_and_public_collection_module_1 = require("./supplier/supplier-total-debt-and-debit-list-and-public-collection/supplier-total-debt-and-debit-list-and-public-collection.module");
const supplier_order_total_order_by_time_module_1 = require("./supplier/supplier-order-total-order-by-time/supplier-order-total-order-by-time.module");
const supplier_category_detail_module_1 = require("./supplier/supplier-category-detail/supplier-category-detail.module");
const business_result_report_module_1 = require("./order-lv1/business-result-report/business-result-report.module");
const current_day_report_module_1 = require("./order-lv1/current-day-report/current-day-report.module");
const customer_use_points_report_module_1 = require("./order-lv1/customer-use-points-report/customer-use-points-report.module");
const restaurant_cash_detail_report_module_1 = require("./order-lv1/restaurant-cash-detail-report/restaurant-cash-detail-report.module");
const restaurant_customer_report_module_1 = require("./order-lv1/restaurant-customer-report/restaurant-customer-report.module");
const restaurant_discount_from_order_report_module_1 = require("./order-lv1/restaurant-discount-from-order-report/restaurant-discount-from-order-report.module");
const restaurant_employee_target_report_module_1 = require("./order-lv1/restaurant-employee-target-report/restaurant-employee-target-report.module");
const restaurant_order_extra_charge_report_module_1 = require("./order-lv1/restaurant-order-extra-charge-report/restaurant-order-extra-charge-report.module");
const restaurant_revenue_by_category_report_module_1 = require("./order-lv1/restaurant-revenue-by-category-report/restaurant-revenue-by-category-report.module");
const restaurant_vat_report_module_1 = require("./order-lv1/restaurant-vat-report/restaurant-vat-report.module");
const customer_accumulate_points_report_module_1 = require("./order-lv1/customer-accumulate-points-report/customer-accumulate-points-report.module");
const warehouse_session_total_import_export_amount_report_module_1 = require("./order-lv1/warehouse-session-total-import-export-amount-report/warehouse-session-total-import-export-amount-report.module");
const restaurant_information_in_aloline_report_module_1 = require("./order-lv1/restaurant-information-in-aloline-report/restaurant-information-in-aloline-report.module");
const restaurant_membership_card_level_report_module_1 = require("./order-lv1/restaurant-membership-card-level-report/restaurant-membership-card-level-report.module");
const supplier_material_price_change_histories_report_module_1 = require("./order-lv1/supplier-material-price-change-histories-report/supplier-material-price-change-histories-report.module");
const restaurant_order_detail_by_food_id_report_module_1 = require("./order-lv1/restaurant-order-detail-by-food-id-report/restaurant-order-detail-by-food-id-report.module");
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
            supplier_overview_report_module_1.SupplierOverviewReportModule,
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
            admin_total_all_saler_report_module_1.AdminTotalAllSalerReportModule,
            admin_location_with_best_sales_results_report_module_1.AdminLocationWithBestSalesResultsReportModule,
            admin_total_all_location_with_best_sales_results_report_module_1.AdminTotalAllLocationWithBestSalesResultsReportModule,
            admin_advertising_revenue_detail_module_1.AdminAdvertisingRevenueDetailModule,
            supplier_total_debt_and_debit_list_and_public_collection_module_1.SupplierTotalDebtAndDebitListAndPublicCollectionModule,
            supplier_order_total_order_by_time_module_1.SupplierOrderTotalOrderByTimeModule,
            supplier_category_detail_module_1.SupplierCategoryDetailModule,
            business_result_report_module_1.BusinessResultReportModule,
            current_day_report_module_1.CurrentDayReportModule,
            customer_use_points_report_module_1.CustomerUsePointsReportModule,
            restaurant_cash_detail_report_module_1.RestaurantCashDetailReportModule,
            restaurant_customer_report_module_1.RestaurantCustomerReportModule,
            restaurant_discount_from_order_report_module_1.RestaurantDiscountFromOrderReportModule,
            restaurant_employee_target_report_module_1.RestaurantEmployeeTargetReportModule,
            restaurant_order_extra_charge_report_module_1.RestaurantOrderExtraChargeReportModule,
            restaurant_revenue_by_category_report_module_1.RestaurantRevenueByCategoryReportModule,
            restaurant_vat_report_module_1.RestaurantVatReportModule,
            customer_accumulate_points_report_module_1.CustomerAccumulatePointsReportModule,
            warehouse_session_total_import_export_amount_report_module_1.WarehouseSessionTotalImportExportAmountReportModule,
            restaurant_information_in_aloline_report_module_1.RestaurantInformationInAlolineReportModule,
            restaurant_membership_card_level_report_module_1.RestaurantMembershipCardLevelReportModule,
            supplier_material_price_change_histories_report_module_1.SupplierMaterialPriceChangeHistoriesReportModule,
            restaurant_order_detail_by_food_id_report_module_1.RestaurantOrderDetailByFoodIdReportModule
        ],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map