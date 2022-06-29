"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const fs = require("fs");
const app_module_1 = require("./app.module");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
};
async function bootstrap() {
    let app = null;
    if (process.env.SSL === 'enable') {
        app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter({ https: httpsOptions }), {
            httpsOptions,
        });
    }
    else {
        app = await core_1.NestFactory.create(app_module_1.AppModule);
    }
    app.enableCors();
    await app.listen(process.env.PORT, '0.0.0.0');
    console.log(`Application https:${process.env.SSL} is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map