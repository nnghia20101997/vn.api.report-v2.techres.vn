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
exports.AdminGravityProductBestSellerController = void 0;
const common_1 = require("@nestjs/common");
const utils_format_time_common_1 = require("../../utils.common/utils.format-time.common/utils.format-time.common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const admin_gravity_product_best_seller_query_dto_1 = require("./admin-gravity-product-best-seller.dto/admin-gravity-product-best-seller.query.dto");
const admin_gravity_product_best_seller_response_1 = require("./admin-gravity-product-best-seller.response/admin-gravity-product-best-seller.response");
const admin_gravity_product_best_seller_service_1 = require("./admin-gravity-product-best-seller.service");
let AdminGravityProductBestSellerController = class AdminGravityProductBestSellerController {
    constructor(adminGravityProductBestSellerService) {
        this.adminGravityProductBestSellerService = adminGravityProductBestSellerService;
    }
    async spGRpAdminAdvertisingRevenue(adminGravityProductBestSellerQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.adminGravityProductBestSellerService.spGRpAdminGravityProductBestSeller(utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(adminGravityProductBestSellerQueryDTO.from_date), utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(adminGravityProductBestSellerQueryDTO.to_date));
        response.setData(new admin_gravity_product_best_seller_response_1.AdminGravityProductBestSellerResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_gravity_product_best_seller_query_dto_1.AdminGravityProductBestSellerQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], AdminGravityProductBestSellerController.prototype, "spGRpAdminAdvertisingRevenue", null);
AdminGravityProductBestSellerController = __decorate([
    (0, common_1.Controller)("/api/admin-gravity-product-best-seller"),
    __metadata("design:paramtypes", [admin_gravity_product_best_seller_service_1.AdminGravityProductBestSellerService])
], AdminGravityProductBestSellerController);
exports.AdminGravityProductBestSellerController = AdminGravityProductBestSellerController;
//# sourceMappingURL=admin-gravity-product-best-seller.controller.js.map