"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var users_component_1 = require("./Components/users.component");
var new_user_component_1 = require("./Components/new-user.component");
var users_service_1 = require("./Services/users.service");
var prevent_unsaved_changes_guard_service_1 = require("../prevent-unsaved-changes-guard.service");
var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule,
            http_1.HttpModule
        ],
        declarations: [
            users_component_1.UsersComponent,
            new_user_component_1.NewUserComponent
        ],
        exports: [
            users_component_1.UsersComponent,
            new_user_component_1.NewUserComponent
        ],
        providers: [
            users_service_1.UsersService,
            prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map