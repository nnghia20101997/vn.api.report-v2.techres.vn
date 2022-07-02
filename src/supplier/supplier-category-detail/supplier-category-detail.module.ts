import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SupplierCategoryDetailController } from "./supplier-category-detail.controller";
import { SupplierCategoryDetailDataModelEntity } from "./supplier-category-detail.entity/supplier-category-detail.data.model.entity";
import { SupplierCategoryDetailService } from "./supplier-category-detail.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([SupplierCategoryDetailDataModelEntity]),
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({
          secret: process.env.SECRET_TOKEN,
        }),
        SupplierCategoryDetailModule,
      ],
      controllers: [SupplierCategoryDetailController],
      providers: [SupplierCategoryDetailService],
      exports: [SupplierCategoryDetailService]
})
export class SupplierCategoryDetailModule {}