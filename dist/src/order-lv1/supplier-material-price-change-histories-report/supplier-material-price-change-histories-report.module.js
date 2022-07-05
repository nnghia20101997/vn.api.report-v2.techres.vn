"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SupplierMaterialPriceChangeHistoriesReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierMaterialPriceChangeHistoriesReportModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const supplier_material_price_change_histories_report_service_1 = require("./supplier-material-price-change-histories-report.service");
const supplier_material_price_change_histories_report_controller_1 = require("./supplier-material-price-change-histories-report.controller");
const supplier_material_price_change_histories_report_entity_1 = require("./supplier-material-price-change-histories-report.entity/supplier-material-price-change-histories-report.entity");
let SupplierMaterialPriceChangeHistoriesReportModule = SupplierMaterialPriceChangeHistoriesReportModule_1 = class SupplierMaterialPriceChangeHistoriesReportModule {
};
SupplierMaterialPriceChangeHistoriesReportModule = SupplierMaterialPriceChangeHistoriesReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([supplier_material_price_change_histories_report_entity_1.SupplierMaterialPriceChangeHistoriesReportEntity
            ]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            SupplierMaterialPriceChangeHistoriesReportModule_1
        ],
        providers: [supplier_material_price_change_histories_report_service_1.SupplierMaterialPriceChangeHistoriesReportService],
        controllers: [supplier_material_price_change_histories_report_controller_1.SupplierMaterialPriceChangeHistoriesReportController]
    })
], SupplierMaterialPriceChangeHistoriesReportModule);
exports.SupplierMaterialPriceChangeHistoriesReportModule = SupplierMaterialPriceChangeHistoriesReportModule;
//# sourceMappingURL=supplier-material-price-change-histories-report.module.js.map