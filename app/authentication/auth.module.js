"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by wissem on 2/24/17.
 */
var core_1 = require("@angular/core");
var signUp_component_1 = require("./signUp.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var login_component_1 = require("./login.component");
var http_1 = require("@angular/http");
var AuthModel = (function () {
    function AuthModel() {
    }
    return AuthModel;
}());
AuthModel = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'signup', component: signUp_component_1.SignUpComponent },
                { path: 'login', component: login_component_1.LoginComponent }
            ]),
            forms_1.ReactiveFormsModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [signUp_component_1.SignUpComponent,
            login_component_1.LoginComponent
        ],
        providers: []
    })
], AuthModel);
exports.AuthModel = AuthModel;
//# sourceMappingURL=auth.module.js.map