import {Component, OnInit}  from '@angular/core';

import {IProduct} from './product';
import {ProductService} from './product.service';
import {ProductEditComponent} from "./product-edit.component";
import {Router, ActivatedRoute} from "@angular/router";

@Component( {
    templateUrl: 'app/products/product-list.component.html', styleUrls: ['app/products/product-list.component.css']
} )
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    products: IProduct[];

    constructor(private _productService: ProductService, private router : Router) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe( products => this.products = products,
                error => this.errorMessage = <any>error,
               () => console.log(this.products));
       // console.log(this.products);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
    OndeleteProduct(id : number){
        this.deleteProduct(id)
    }

    private deleteProduct(id :number): void {
        if (id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        } else {
            if (confirm(`Really delete the product ?`)) {
                this._productService.deleteProduct(id)
                    .subscribe(
                        () => this.onSaveComplete(),
                        (error: any) => this.errorMessage = <any>error
                    );
            }
        }}
    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.router.navigate(['/products']);
    }
}
