
/**
 * Created by wissem on 3/1/17.
 */

import {Injectable} from "@angular/core";
import {CanDeactivate} from "@angular/router";
import {ProductEditComponent} from "./product-edit.component";

@Injectable()

export class ProductAddGuard
implements CanDeactivate<ProductEditComponent>{
canDeactivate(component : ProductEditComponent):boolean{
    if(component.productForm.dirty){
        let productName =component.productForm
            .get('productName').value || "New Product"
        return confirm('Navigate away and lose all changes to ${productNam}?');
    }
    return true;
}

}