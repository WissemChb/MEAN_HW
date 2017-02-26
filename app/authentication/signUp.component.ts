
/**
 * Created by wissem on 2/24/17.
 */
import {Component, OnInit} from "@angular/core";
import {Customer} from "./Customer";
import {FormGroup, FormBuilder, Validators, AbstractControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';

function passwordValidator(c:AbstractControl){
    let passwdControl = c.get('password');
    let confirmPasswdControl = c.get('confirmPassword');
    if(confirmPasswdControl.pristine || passwdControl.pristine){
        return null;
    }
    if(passwdControl.value === confirmPasswdControl.value){
        return null;
    }
    return {'match' : true};
}


@Component({
    moduleId : module.id,
    templateUrl:'SignUp.component.html',
    styleUrls:['signUp.component.css']
})
export class SignUpComponent implements OnInit{
    pageTitle: string = "Sign Up";
    customer:Customer = new Customer();
    customerForm: FormGroup;
    constructor( private formGr : FormBuilder){}
    passwordMessage : string;
    private PasswordValidationMessage ={
        required : 'Please confirm your password',
        match : 'Password doesn\'t match'
    };
    setMessage(c: AbstractControl):void{
        this.passwordMessage = '';
        if((c.touched || c.dirty)
            && c.errors){
            this.passwordMessage = Object.keys(c.errors).map(key =>
            this.PasswordValidationMessage[key]).join(' ');
        }

    }
    ngOnInit():void
    {
        this.customerForm = this.formGr.group({
            firstName :['',[Validators.required,
                Validators.minLength(3)]],
            secondName : ['',[Validators.required,Validators.minLength(3)]],
            username : ['',Validators.required],
            email : ['',[Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
            passwordMatch : this.formGr.group({
                password : ['',Validators.required],
                confirmPassword : ['',Validators.required]
            },{validator : passwordValidator})

        });
       const  confirmPasswordControl = this.customerForm.get('passwordMatch');
        confirmPasswordControl.valueChanges.debounceTime(1000).
        subscribe(value =>this.setMessage(confirmPasswordControl));
    }
    save() {
        console.log(this.customerForm)
    }
}