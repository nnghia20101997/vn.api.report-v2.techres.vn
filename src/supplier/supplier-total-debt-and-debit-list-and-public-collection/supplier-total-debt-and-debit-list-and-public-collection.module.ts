import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SupplierTotalDebtAndDebitListAndPublicCollectionController } from "./supplier-total-debt-and-debit-list-and-public-collection.controller";
import { SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity } from "./supplier-total-debt-and-debit-list-and-public-collection.entity/supplier-total-debt-and-debit-list-and-public-collection.data.model.entity";
import { SupplierTotalDebtAndDebitListAndPublicCollectionService } from "./supplier-total-debt-and-debit-list-and-public-collection.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity,
    ]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    SupplierTotalDebtAndDebitListAndPublicCollectionModule,
  ],
  controllers: [SupplierTotalDebtAndDebitListAndPublicCollectionController],
  providers: [SupplierTotalDebtAndDebitListAndPublicCollectionService],
  exports: [SupplierTotalDebtAndDebitListAndPublicCollectionService],
})
export class SupplierTotalDebtAndDebitListAndPublicCollectionModule {}
