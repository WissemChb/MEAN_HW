/**
 * Created by wissem on 3/1/17.
 */

import {FormGroup} from "@angular/forms";



export class GenericValidator {
    constructor(private validationMessage:{[key : string]:{[key : string] : string}}){}

    processMessage(container : FormGroup) : { [key: string] : string }{
        let message = {};
        for(let controlKey in container.controls){
            if(container.controls.hasOwnProperty(controlKey)) {
                let c = container.controls[controlKey];
                if (c instanceof FormGroup) {
                    let childMessage = this.processMessage(c);
                    Object.assign(message, childMessage);

                } else {
                    if ((c.dirty || c.touched) && c.errors) {
                        message[controlKey]='';
                        Object.keys(c.errors).map(messageKey => {
                            if (this.validationMessage[controlKey][messageKey]) {
                                message[controlKey] += this.validationMessage[controlKey][messageKey] + ' ';
                            }
                        });
                    }
                }
            }
        }
        return message;
    }

}