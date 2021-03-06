"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const db_1 = require("./db");
const controller_1 = require("./teachers/controller");
const controller_2 = require("./batches/controller");
const controller_3 = require("./students/controller");
const controller_4 = require("./evaluations/controller");
const controller_5 = require("./logins/controller");
const port = process.env.PORT || 4000;
const app = routing_controllers_1.createKoaServer({
    cors: true,
    controllers: [
        controller_1.default,
        controller_2.default,
        controller_3.default,
        controller_4.default,
        controller_5.default
    ]
});
db_1.default()
    .then(_ => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
})
    .catch(err => console.error(err));
//# sourceMappingURL=index.js.map