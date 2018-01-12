"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var not_found_component_1 = require("./not-found.component");
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'not-found', component: not_found_component_1.NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
]);
//# sourceMappingURL=app.routing.js.map