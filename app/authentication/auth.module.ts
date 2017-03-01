/**
 * Created by wissem on 2/24/17.
 */
import {NgModule} from "@angular/core";
import {SignUpComponent} from "./signUp.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./login.component";
import {HttpModule} from "@angular/http";


@NgModule({
    imports:[
        RouterModule.forChild([
            {path: 'signup', component : SignUpComponent},
            {path : 'login' ,component : LoginComponent}
            ]),
        ReactiveFormsModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations:[SignUpComponent,
        LoginComponent
    ],
    providers:[]
})
export class AuthModel{

}
