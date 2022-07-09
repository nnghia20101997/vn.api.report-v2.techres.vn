"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SupplierWarehouseSesssionReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierWarehouseSesssionReportModule = void 0;
const common_1 = require("@nestjs/common");
const supplier_warehouse_sesssion_report_service_1 = require("./supplier-warehouse-sesssion-report.service");
const supplier_warehouse_sesssion_report_controller_1 = require("./supplier-warehouse-sesssion-report.controller");
const supplier_warehouse_sesssion_report_entity_1 = require("./supplier-warehouse-sesssion-report.entity/supplier-warehouse-sesssion-report.entity");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
let SupplierWarehouseSesssionReportModule = SupplierWarehouseSesssionReportModule_1 = class SupplierWarehouseSesssionReportModule {
};
SupplierWarehouseSesssionReportModule = SupplierWarehouseSesssionReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([supplier_warehouse_sesssion_report_entity_1.SupplierWarehouseSesssionReportEntity]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            SupplierWarehouseSesssionReportModule_1,
        ],
        providers: [supplier_warehouse_sesssion_report_service_1.SupplierWarehouseSesssionReportService],
        controllers: [supplier_warehouse_sesssion_report_controller_1.SupplierWarehouseSesssionReportController]
    })
], SupplierWarehouseSesssionReportModule);
exports.SupplierWarehouseSesssionReportModule = SupplierWarehouseSesssionReportModule;
//# sourceMappingURL=supplier-warehouse-sesssion-report.module.js.map