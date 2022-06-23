"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
class Pagination {
    constructor(page, limit) {
        this.page = page;
        this.limit = limit;
    }
    getOffset() {
        if (this.page < 1) {
            return 0;
        }
        else {
            return (this.page - 1) * this.limit;
        }
    }
}
exports.Pagination = Pagination;
//# sourceMappingURL=utils.pagination.common.js.map