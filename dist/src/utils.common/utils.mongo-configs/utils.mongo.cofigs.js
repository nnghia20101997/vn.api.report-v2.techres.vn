"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDatabaseMongo = void 0;
class ConnectDatabaseMongo {
    constructor() { }
    connectMongo() {
        let result = `${process.env.DB_CONNECTION}://${process.env.DB_USERNAME}:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
        return result;
    }
}
exports.ConnectDatabaseMongo = ConnectDatabaseMongo;
//# sourceMappingURL=utils.mongo.cofigs.js.map