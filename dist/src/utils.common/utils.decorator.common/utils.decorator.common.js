"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEmptyArray = exports.MaxLength20 = exports.IsInt = exports.IsNotEmpty = exports.IsNotEmptyString = exports.GetAdminOrSalerFromToken = exports.GetAdminFromToken = exports.GetTechresSalerFromToken = exports.RequestHeaderVerifyApiKey = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const utils_exception_common_1 = require("../utils.exception.common/utils.exception.common");
const utils_handle_base64_common_1 = require("../utils.handle-base64.common/utils.handle-base64.common");
exports.RequestHeaderVerifyApiKey = (0, common_1.createParamDecorator)(async (data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    switch (data) {
        case 'authorization':
            let verifyApiKey = utils_handle_base64_common_1.HandleBase64.verifyApiKey(request.headers.authorization);
            if (!verifyApiKey) {
                throw new common_1.HttpException(new utils_exception_common_1.ExceptionResponseDetail(common_1.HttpStatus.FORBIDDEN, 'Vui lòng truyền api_key!'), common_1.HttpStatus.OK);
            }
            else {
                return verifyApiKey;
            }
        default:
            throw new common_1.HttpException(new utils_exception_common_1.ExceptionResponseDetail(common_1.HttpStatus.FORBIDDEN), common_1.HttpStatus.OK);
    }
});
exports.GetTechresSalerFromToken = (0, common_1.createParamDecorator)(async (data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (!request.user) {
        throw new common_1.HttpException(new utils_exception_common_1.ExceptionResponseDetail(common_1.HttpStatus.UNAUTHORIZED, "Token không hợp lệ!"), common_1.HttpStatus.OK);
    }
    return request.user;
});
exports.GetAdminFromToken = (0, common_1.createParamDecorator)(async (data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (!request.user) {
        throw new common_1.HttpException(new utils_exception_common_1.ExceptionResponseDetail(common_1.HttpStatus.UNAUTHORIZED, "Token không hợp lệ!"), common_1.HttpStatus.OK);
    }
    return request.user;
});
exports.GetAdminOrSalerFromToken = (0, common_1.createParamDecorator)(async (data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
function IsNotEmptyString(validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'isNotEmptyString',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate: (value) => (0, class_validator_1.isString)(value) && (0, class_validator_1.isNotEmpty)(value.trim()),
                defaultMessage: (validationArguments) => {
                    throw new common_1.HttpException(new utils_exception_common_1.ExceptionResponseDetail(common_1.HttpStatus.BAD_REQUEST, `[${validationArguments.property}] không được để trống `), common_1.HttpStatus.OK);
                },
            },
        });
    };
}
exports.IsNotEmptyString = IsNotEmptyString;
function IsNotEmpty(validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'isNotEmpty',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate: (value) => typeof value === "string" && value.trim().length > 0,
                defaultMessage: (validationArguments) => {
                    throw new common_1.HttpException(new utils_exception_common_1.ExceptionResponseDetail(common_1.HttpStatus.BAD_REQUEST, `[${validationArguments.property}] không được để trống `), common_1.HttpStatus.OK);
                },
            },
        });
    };
}
exports.IsNotEmpty = IsNotEmpty;
function IsInt(validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'isInt',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate: (value) => !parseInt(value) || !isNaN(value) || !value,
                defaultMessage: (validationArguments) => {
                    throw new common_1.HttpException(new utils_exception_common_1.ExceptionResponseDetail(common_1.HttpStatus.BAD_REQUEST, `[${validationArguments.property}] phải là kiêu số nguyên!`), common_1.HttpStatus.OK);
                },
            },
        });
    };
}
exports.IsInt = IsInt;
function MaxLength20(validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'maxLength20',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate: (value) => !(value.length > 20) || !value,
                defaultMessage: (validationArguments) => {
                    throw new common_1.HttpException(new utils_exception_common_1.ExceptionResponseDetail(common_1.HttpStatus.BAD_REQUEST, `[${validationArguments.property}] không được nhập quá 20 ký tự ${propertyName}!`), common_1.HttpStatus.OK);
                },
            },
        });
    };
}
exports.MaxLength20 = MaxLength20;
function IsEmptyArray(validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'isNotArray',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate: (value) => !(value.length == 0),
                defaultMessage: (validationArguments) => {
                    throw new common_1.HttpException(new utils_exception_common_1.ExceptionResponseDetail(common_1.HttpStatus.BAD_REQUEST, `[${validationArguments.property}] không được để rỗng!`), common_1.HttpStatus.OK);
                },
            },
        });
    };
}
exports.IsEmptyArray = IsEmptyArray;
//# sourceMappingURL=utils.decorator.common.js.map