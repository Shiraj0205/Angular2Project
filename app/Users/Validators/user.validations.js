"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserValidations = (function () {
    function UserValidations() {
    }
    UserValidations.email = function (control) {
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = regEx.test(control.value);
        return valid ? null : { email: true };
    };
    return UserValidations;
}());
exports.UserValidations = UserValidations;
//# sourceMappingURL=user.validations.js.map