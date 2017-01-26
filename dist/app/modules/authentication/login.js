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
var core_1 = require("@angular/core");
var data_service_1 = require("../reusables/data.service");
var router_1 = require('@angular/router');
var Login = (function () {
    function Login(router, data) {
        this.router = router;
        this.data = data;
        this.users = null;
        this.user = {};
        this.users = this.data.getUsers();
    }
    Login.prototype.login = function (item) {
        var _this = this;
        this.users.filter(function (obj) {
            if (obj.name == item.login && obj.password == item.password) {
                _this.router.navigate(['/home']);
            }
        });
    };
    Login.prototype.clear = function () {
    };
    Login = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './app/modules/authentication/login.html',
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.js.map