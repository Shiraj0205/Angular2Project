"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var users_module_1 = require("./Users/users.module");
var posts_module_1 = require("./Posts/posts.module");
var shared_module_1 = require("./Shared/shared.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var navbar_component_1 = require("./navbar.component");
var not_found_component_1 = require("./not-found.component");
var users_routing_1 = require("./Users/users.routing");
var posts_routing_1 = require("./Posts/posts.routing");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            users_module_1.UsersModule,
            posts_module_1.PostsModule,
            shared_module_1.SharedModule,
            users_routing_1.usersRouting,
            posts_routing_1.postsRouting,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavBarComponent,
            home_component_1.HomeComponent,
            not_found_component_1.NotFoundComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map