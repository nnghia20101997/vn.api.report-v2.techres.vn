"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierCategoryDetailController = void 0;
const common_1 = require("@nestjs/common");
const utils_format_time_common_1 = require("../../utils.common/utils.format-time.common/utils.format-time.common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const supplier_category_detail_query_dto_1 = require("./supplier-category-detail.dto/supplier-category-detail.query.dto");
const supplier_category_detail_output_response_1 = require("./supplier-category-detail.response/supplier-category-detail.output.response");
const supplier_category_detail_service_1 = require("./supplier-category-detail.service");
let SupplierCategoryDetailController = class SupplierCategoryDetailController {
    constructor(supplierCategoryDetailService) {
        this.supplierCategoryDetailService = supplierCategoryDetailService;
    }
    async spGRpSupplierCategoryDetail(supplierCategoryDetailQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.supplierCategoryDetailService.spGRpSupplierCategoryDetail(supplierCategoryDetailQueryDTO.supplierI_id, supplierCategoryDetailQueryDTO.material_categorie_id, utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(supplierCategoryDetailQueryDTO.from_date), utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(supplierCategoryDetailQueryDTO.to_date), supplierCategoryDetailQueryDTO.limit, supplierCategoryDetailQueryDTO.offset);
        response.setData(new supplier_category_detail_output_response_1.SupplierCategoryDetailOutputResponse(result.list, result.output));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [supplier_category_detail_query_dto_1.SupplierCategoryDetailQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], SupplierCategoryDetailController.prototype, "spGRpSupplierCategoryDetail", null);
SupplierCategoryDetailController = __decorate([
    (0, common_1.Controller)("/api/supplier-category-detail"),
    __metadata("design:paramtypes", [supplier_category_detail_service_1.SupplierCategoryDetailService])
], SupplierCategoryDetailController);
exports.SupplierCategoryDetailController = SupplierCategoryDetailController;
//# sourceMappingURL=supplier-category-detail.controller.js.map