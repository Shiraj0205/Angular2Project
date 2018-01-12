"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var users_service_1 = require("../Services/users.service");
var UsersComponent = (function () {
    function UsersComponent(_userService) {
        this._userService = _userService;
        this.isLoading = true;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUsers()
            .subscribe(function (u) {
            _this.isLoading = false;
            _this.users = u;
        });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        if (confirm('are you sure you want to delete user ' + user.name + '?')) {
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);
            this._userService.deleteUser(user.id)
                .subscribe(null, function (err) {
                alert('Failed to delete user');
                _this.users.splice(index, 0, user);
            });
        }
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'users',
        templateUrl: '/app/Users/Views/users.component.html',
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map