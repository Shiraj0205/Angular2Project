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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var user_validations_1 = require("../Validators/user.validations");
var user_1 = require("./user");
var users_service_1 = require("../Services/users.service");
var NewUserComponent = (function () {
    function NewUserComponent(fb, _router, _route, _usersService) {
        this._router = _router;
        this._route = _route;
        this._usersService = _usersService;
        this.user = new user_1.User();
        this.form = fb.group({
            name: ['', forms_1.Validators.required],
            email: ['', user_validations_1.UserValidations.email],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }
    ;
    NewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.title = id ? "Edit User" : "Add User";
            if (!id)
                return;
            _this._usersService.getUser(id)
                .subscribe(function (u) {
                return _this.user = u;
            }, function (response) {
                if (response.status == 404) {
                    _this._router.navigate(['NotFound']);
                }
            });
        });
    };
    NewUserComponent.prototype.save = function () {
        var _this = this;
        if (this.user.id) {
            this._usersService.updateUser(this.user)
                .subscribe(function (user) {
                _this._router.navigate(['users']);
            });
        }
        else {
            this._usersService.addUser(this.user)
                .subscribe(function (user) {
                _this._router.navigate(["users"]);
            });
        }
    };
    return NewUserComponent;
}());
NewUserComponent = __decorate([
    core_1.Component({
        templateUrl: '/app/Users/Views/new-user.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute, users_service_1.UsersService])
], NewUserComponent);
exports.NewUserComponent = NewUserComponent;
//# sourceMappingURL=new-user.component.js.map