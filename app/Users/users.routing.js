"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var users_component_1 = require("./Components/users.component");
var new_user_component_1 = require("./Components/new-user.component");
var prevent_unsaved_changes_guard_service_1 = require("../prevent-unsaved-changes-guard.service");
exports.usersRouting = router_1.RouterModule.forChild([
    {
        path: 'users/:id',
        component: new_user_component_1.NewUserComponent,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    },
    {
        path: 'users/newUser',
        component: new_user_component_1.NewUserComponent,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent
    }
]);
//# sourceMappingURL=users.routing.js.map