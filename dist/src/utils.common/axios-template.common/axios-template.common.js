"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
const axios_1 = require("axios");
class http {
    constructor() { }
    static async request(url, body, method) {
        let query = {
            "params": body,
            "http_method": method,
            "is_production_mode": 0,
            "project_id": 1487,
            "request_url": url
        };
        return await axios_1.default.post('https://beta.api.gateway.techres.vn/api/queues', query);
    }
}
exports.http = http;
//# sourceMappingURL=axios-template.common.js.map