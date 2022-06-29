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
import { AdminCustomerAlolineReportModule } from "./admin/admin-customer-aloline-report/admin-customer-aloline-report.module";
import { AdminTopTenProductBestSellerDetailModule } from "./admin/admin-top-ten-product-best-seller-detail/admin-top-ten-product-best-seller-detail.module";
import { AdminGravityProductBestSellerModule } from "./admin/admin-gravity-product-best-seller/admin-gravity-product-best-seller.module";
import { AdminTotalRevenueProductsModule } from "./admin/admin-total-revenue-products/admin-total-revenue-products.module";
import { AdminAdvertisingRevenueModule } from "./admin/admin-advertising-revenue/admin-advertising-revenue.module";

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
      `${process.env.DB_MONGO_CONNECTION}://${
        process.env.DB_MONGO_USERNAME
      }:${encodeURIComponent(process.env.DB_MONGO_PASSWORD)}@${
        process.env.DB_MONGO_HOST
      }:${process.env.DB_MONGO_PORT}/${process.env.DB_MONGO_NAME}`
    ),
    // MongooseModule.forRoot(`${process.env.DB_MONGO_CONNECTION}://${process.env.DB_USERNAME_LOGS}:${encodeURIComponent(process.env.DB_PASSWORD_LOGS)}@${process.env.DB_MONGO_HOST}:${process.env.DB_MONGO_PORT}/${process.env.DB_NAME_LOGS}`, {connectionName: 'log'}),

    AuthModule,
    RestaurantModule,
    RestaurantBrandModule,
    BranchModule,
    SupplierOverviewReportModule,
    AdminAdvertisingRevenueModule,
    AdminCustomerAlolineReportModule,
    AdminTopTenProductBestSellerDetailModule,
    AdminGravityProductBestSellerModule,
    AdminTotalRevenueProductsModule,
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
