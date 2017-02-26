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
/**
 * Created by wissem on 2/24/17.
 */
var core_1 = require("@angular/core");
var Customer_1 = require("./Customer");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/debounceTime");
function passwordValidator(c) {
    var passwdControl = c.get('password');
    var confirmPasswdControl = c.get('confirmPassword');
    if (confirmPasswdControl.pristine || passwdControl.pristine) {
        return null;
    }
    if (passwdControl.value === confirmPasswdControl.value) {
        return null;
    }
    return { 'match': true };
}
var SignUpComponent = (function () {
    function SignUpComponent(formGr) {
        this.formGr = formGr;
        this.pageTitle = "Sign Up";
        this.customer = new Customer_1.Customer();
        this.PasswordValidationMessage = {
            required: 'Please confirm your password',
            match: 'Password doesn\'t match'
        };
    }
    SignUpComponent.prototype.setMessage = function (c) {
        var _this = this;
        this.passwordMessage = '';
        if ((c.touched || c.dirty)
            && c.errors) {
            this.passwordMessage = Object.keys(c.errors).map(function (key) {
                return _this.PasswordValidationMessage[key];
            }).join(' ');
        }
    };
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerForm = this.formGr.group({
            firstName: ['', [forms_1.Validators.required,
                    forms_1.Validators.minLength(3)]],
            secondName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            username: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required,
                    forms_1.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
            passwordMatch: this.formGr.group({
                password: ['', forms_1.Validators.required],
                confirmPassword: ['', forms_1.Validators.required]
            }, { validator: passwordValidator })
        });
        var confirmPasswordControl = this.customerForm.get('passwordMatch');
        confirmPasswordControl.valueChanges.debounceTime(1000).
            subscribe(function (value) { return _this.setMessage(confirmPasswordControl); });
    };
    SignUpComponent.prototype.save = function () {
        console.log(this.customerForm);
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'SignUp.component.html',
        styleUrls: ['signUp.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signUp.component.js.map