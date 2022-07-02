"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreProcedureResultOutput = void 0;
const common_1 = require("@nestjs/common");
const utils_exception_common_1 = require("../utils.exception.common/utils.exception.common");
const utils_store_procedure_status_enum_common_1 = require("./utils.store-procedure-status-enum.common");
class StoreProcedureResultOutput {
    constructor(result) {
        this.result = result ? null : result;
    }
    getResultOutputPagination(data) {
        if (data.length < 3 &&
            (parseInt(data[0][0].status) === utils_store_procedure_status_enum_common_1.StoreProcedureStatusEnum.ERROR ||
                parseInt(data[0][0].status) === utils_store_procedure_status_enum_common_1.StoreProcedureStatusEnum.FAIL_LOGIC)) {
            throw new common_1.HttpException(new utils_exception_common_1.ExceptionResponseDetail(common_1.HttpStatus.BAD_REQUEST, data[0][0].message), common_1.HttpStatus.OK);
        }
        delete data[2][0].status_code;
        delete data[2][0].message_error;
        return {
            list: data[0],
            total_record: +data[2][0].total_record,
            output: data[2][0].output
        };
    }
    getResultOutputList(data) {
        if (data.length < 3 &&
            (parseInt(data[0][0].status) === utils_store_procedure_status_enum_common_1.StoreProcedureStatusEnum.ERROR ||
                parseInt(data[0][0].status) === utils_store_procedure_status_enum_common_1.StoreProcedureStatusEnum.FAIL_LOGIC)) {
            throw new common_1.HttpException(new utils_exception_common_1.ExceptionResponseDetail(common_1.HttpStatus.BAD_REQUEST, data[0][0].message), common_1.HttpStatus.OK);
        }
        delete data[2][0].status_code;
        delete data[2][0].message_error;
        return {
            total_record: 0,
            list: data[0],
            output: data[2][0],
        };
    }
    getResultOutputDetail(data) {
        if (data.length < 3 &&
            (parseInt(data[1][0].status) === utils_store_procedure_status_enum_common_1.StoreProcedureStatusEnum.ERROR ||
                parseInt(data[1][0].status) === utils_store_procedure_status_enum_common_1.StoreProcedureStatusEnum.FAIL_LOGIC)) {
            throw new common_1.HttpException(new utils_exception_common_1.ExceptionResponseDetail(common_1.HttpStatus.BAD_REQUEST, data[0][0].message), common_1.HttpStatus.OK);
        }
        if (data.length === 3 && parseInt(data[0].length) === 0) {
            throw new common_1.HttpException(new utils_exception_common_1.ExceptionResponseDetail(common_1.HttpStatus.BAD_REQUEST, "Không tồn tại!"), common_1.HttpStatus.OK);
        }
        delete data[2][0].status_code;
        delete data[2][0].message_error;
        return {
            total_record: 0,
            list: data[0][0],
            output: data[2][0],
        };
    }
}
exports.StoreProcedureResultOutput = StoreProcedureResultOutput;
//# sourceMappingURL=utils-store-procedure-result-output-common.js.map