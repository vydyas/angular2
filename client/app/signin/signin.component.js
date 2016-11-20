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
var router_1 = require("@angular/router");
var auth_service_1 = require("../auth/auth.service");
var SigninComponent = (function () {
    function SigninComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.signInForm = {
            username: '',
            password: ''
        };
    }
    SigninComponent.prototype.onSignIn = function () {
        var _this = this;
        console.log('onSignIn');
        console.log(this.signInForm);
        this.authService.signIn(this.signInForm).subscribe(function (data) {
            _this.router.navigate(['/']);
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: "index",
            templateUrl: "./app/signin/signin.tpl.html",
            providers: [
                auth_service_1.AuthService
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map