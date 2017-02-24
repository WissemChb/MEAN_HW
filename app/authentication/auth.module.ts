/**
 * Created by wissem on 2/24/17.
 */
import {NgModule} from "@angular/core";
import {SignUpComponent} from "./signUp.component";
import {RouterModule} from "@angular/router";
@NgModule({
    imports:[
        RouterModule.forChild([
            {path: 'signup', component : SignUpComponent}
            ])
    ],
    declarations:[SignUpComponent],
    providers:[]
})
export class AuthModel{

}
