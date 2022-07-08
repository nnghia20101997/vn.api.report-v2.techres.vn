import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SupplierOrderTotalOrderByTimeRController } from "./supplier-order-total-order-by-time.controller";
import { SupplierOrderTotalOrderByTimeDataModelEntity } from "./supplier-order-total-order-by-time.entity/supplier-order-total-order-by-time.data.model.entity";
import { SupplierOrderTotalOrderByTimeService } from "./supplier-order-total-order-by-time.service";

@Module({
    imports: [
      TypeOrmModule.forFeature([SupplierOrderTotalOrderByTimeDataModelEntity]),
      PassportModule.register({ defaultStrategy: "jwt" }),
      JwtModule.register({
        secret: process.env.SECRET_TOKEN,
      }),
      SupplierOrderTotalOrderByTimeModule,
    ],
    controllers: [SupplierOrderTotalOrderByTimeRController],
    providers: [SupplierOrderTotalOrderByTimeService],
    exports: [SupplierOrderTotalOrderByTimeService],
  })
  export class SupplierOrderTotalOrderByTimeModule {}