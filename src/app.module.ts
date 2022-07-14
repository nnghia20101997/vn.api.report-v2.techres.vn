import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";

import { BranchModule } from "./branch/branch.module";
import { RestaurantBrandModule } from "./restaurant-brand/restaurant-brand.module";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { AuthenticationMiddleware } from "./utils.common/utils.middleware.common/utils.bearer-token.common";

import { SupplierOverviewReportModule } from './supplier/supplier-overview-report/supplier-overview-report.module';
import { SupplierOrderListReportModule } from './supplier/supplier-order-list-report/supplier-order-list-report.module';
import { SupplierRevenueReportByTimeModule } from './supplier/supplier-revenue-report-by-time/supplier-revenue-report-by-time.module';
import { SupplierWarehouseSesssionReportModule } from './supplier/supplier-warehouse-sesssion-report/supplier-warehouse-sesssion-report.module';
import { SupplierWarehouseMaterialReportModule } from './supplier/supplier-warehouse-material-report/supplier-warehouse-material-report.module';

import { AdminCustomerAlolineReportModule } from "./admin/admin-customer-aloline-report/admin-customer-aloline-report.module";
import { AdminTopTenProductBestSellerDetailModule } from "./admin/admin-top-ten-product-best-seller-detail/admin-top-ten-product-best-seller-detail.module";
import { AdminGravityProductBestSellerModule } from "./admin/admin-gravity-product-best-seller/admin-gravity-product-best-seller.module";
import { AdminTotalRevenueProductsModule } from "./admin/admin-total-revenue-products/admin-total-revenue-products.module";
import { AdminAdvertisingRevenueModule } from "./admin/admin-advertising-revenue/admin-advertising-revenue.module";
import { AdminBranchReportModule } from "./admin/admin-branch-report/admin-branch-report.module";
import { AdminTopBestSalerReportModule } from "./admin/admin-top-best-saler-report/admin-top-best-saler-report.module";
import { AdminSalerDetailReportModule } from "./admin/admin-saler-detail-report/admin-saler-detail-report.module";
import { AdminBestSalerGravityReportModule } from "./admin/admin-best-saler-gravity-report/admin-best-saler-gravity-report.module";
import { AdminAdvertisingRevenueDetailModule } from "./admin/admin-advertising-revenue-detail/admin-advertising-revenue-detail.module";
import { SupplierTotalDebtAndDebitListAndPublicCollectionModule } from "./supplier/supplier-total-debt-and-debit-list-and-public-collection/supplier-total-debt-and-debit-list-and-public-collection.module";
import { SupplierOrderTotalOrderByTimeModule } from "./supplier/supplier-order-total-order-by-time/supplier-order-total-order-by-time.module";
import { SupplierCategoryDetailModule } from "./supplier/supplier-category-detail/supplier-category-detail.module";


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
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

    MongooseModule.forRoot(
      `${process.env.DB_MONGO_CONNECTION}://${process.env.DB_MONGO_USERNAME
}:${encodeURIComponent(process.env.DB_MONGO_PASSWORD)}@${process.env.DB_MONGO_HOST
      }:${process.env.DB_MONGO_PORT}/${process.env.DB_MONGO_NAME}`
    ),
    // MongooseModule.forRoot(`${process.env.DB_MONGO_CONNECTION}://${process.env.DB_USERNAME_LOGS}:${encodeURIComponent(process.env.DB_PASSWORD_LOGS)}@${process.env.DB_MONGO_HOST}:${process.env.DB_MONGO_PORT}/${process.env.DB_NAME_LOGS}`, {connectionName: 'log'}),

    AuthModule,
    RestaurantModule,
    RestaurantBrandModule,

    SupplierOrderListReportModule,
    SupplierOverviewReportModule,
    SupplierRevenueReportByTimeModule,
    SupplierWarehouseSesssionReportModule,
    SupplierWarehouseMaterialReportModule,

    AdminAdvertisingRevenueModule,
    AdminCustomerAlolineReportModule,
    AdminTopTenProductBestSellerDetailModule,
    AdminGravityProductBestSellerModule,

    AdminTotalRevenueProductsModule, // 29/06
    BranchModule,
    AdminBranchReportModule,
    AdminTopBestSalerReportModule,
    AdminSalerDetailReportModule,
    AdminBestSalerGravityReportModule,
    AdminAdvertisingRevenueDetailModule,
    SupplierTotalDebtAndDebitListAndPublicCollectionModule,
    SupplierOrderTotalOrderByTimeModule,
    SupplierCategoryDetailModule

  ],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes({ path: "/", method: RequestMethod.ALL });
  }
}