"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SupplierWarehouseMaterialReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierWarehouseMaterialReportModule = void 0;
const common_1 = require("@nestjs/common");
const supplier_warehouse_material_report_service_1 = require("./supplier-warehouse-material-report.service");
const supplier_warehouse_material_report_controller_1 = require("./supplier-warehouse-material-report.controller");
const supplier_warehouse_material_report_entity_1 = require("./supplier-warehouse-material-report.entity/supplier-warehouse-material-report.entity");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
let SupplierWarehouseMaterialReportModule = SupplierWarehouseMaterialReportModule_1 = class SupplierWarehouseMaterialReportModule {
};
SupplierWarehouseMaterialReportModule = SupplierWarehouseMaterialReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([supplier_warehouse_material_report_entity_1.SupplierWarehouseMaterialReportEntity]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            SupplierWarehouseMaterialReportModule_1,
        ],
        providers: [supplier_warehouse_material_report_service_1.SupplierWarehouseMaterialReportService],
        controllers: [supplier_warehouse_material_report_controller_1.SupplierWarehouseMaterialReportController]
    })
], SupplierWarehouseMaterialReportModule);
exports.SupplierWarehouseMaterialReportModule = SupplierWarehouseMaterialReportModule;
//# sourceMappingURL=supplier-warehouse-material-report.module.js.map