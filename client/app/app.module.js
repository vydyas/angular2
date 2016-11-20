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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require("@angular/router");
var app_component_1 = require('./app.component');
var index_component_1 = require("./index/index.component");
var signin_component_1 = require("./signin/signin.component");
var not_found_component_1 = require("./error/not-found/not-found.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var auth_guard_1 = require("./auth/auth.guard");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([{
                        path: '',
                        component: index_component_1.IndexComponent,
                        canActivate: [auth_guard_1.AuthGuard]
                    }, {
                        path: 'signin',
                        component: signin_component_1.SigninComponent
                    }, {
                        path: '**',
                        component: not_found_component_1.NotFoundComponent
                    }])
            ],
            declarations: [
                app_component_1.AppComponent,
                index_component_1.IndexComponent,
                not_found_component_1.NotFoundComponent,
                signin_component_1.SigninComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            providers: [
                auth_guard_1.AuthGuard
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map