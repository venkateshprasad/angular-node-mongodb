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
var core_1 = require('@angular/core');
var DataService = (function () {
    function DataService() {
        this.users = [
            { name: 'venkatesh', password: 12345, email: 'venkatesh.m001@gmail.com', mobile: 7702476417 },
            { name: 'raj', password: 12345, email: 'venkatesh.m001@gmail.com', mobile: 7702476417 },
            { name: 'prasad', password: 12345, email: 'venkatesh.m001@gmail.com', mobile: 7702476417 },
            { name: 'ram', password: 12345, email: 'venkatesh.m001@gmail.com', mobile: 7702476417 }
        ];
    }
    DataService.prototype.getUsers = function () {
        return this.users;
    };
    DataService.prototype.saveUser = function (item) {
        this.users.push(item);
        return new Promise(function (resolve, reject) {
            resolve();
        }, {
            reject: function () { }
        });
    };
    DataService.prototype.verifyUser = function (item) {
        var returnVal = false;
        this.users.filter(function (obj) {
            if (obj.name == item.name && obj.password == item.password) {
                returnVal = true;
            }
        });
        return returnVal;
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map