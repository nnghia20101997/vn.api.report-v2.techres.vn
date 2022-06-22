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
import { MobileModule } from "./mobile/mobile.module";
import { RestaurantBrandModule } from "./restaurant-brand/restaurant-brand.module";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { AuthenticationMiddleware } from "./utils.common/utils.middleware.common/utils.bearer-token.common";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: "mysql",
      host: "beta.database.techres.vn",
      port: 3306,
      username: "techres_beta",
      password: "71dca359-0653-4843-bcdc-94e3e3d8f3",
      database: "BETA_TECHRES",
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
    MobileModule,
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
