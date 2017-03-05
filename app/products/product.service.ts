import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    private _productUrl = 'http://localhost:5000/api/products';

    constructor(private _http: Http){ }

    getProducts(): Observable<IProduct[]> {


        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json())
            .catch(this.handleError);

    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find((p: IProduct) => p.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

     saveProduct(product : IProduct) : Observable<IProduct>{
        let headers = new Headers({'content-Type':'application/json'});
        let options = new RequestOptions({headers : headers});
        if(product.id !== 0){
            return this.updateProduct(product,options);
        }
         return this.addProduct(product,options);

    };

    deleteProduct(id: number):Observable<Response>{

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        const url  = `${this._productUrl}/${id}`;

        return this._http.delete(url, options)
            .do(data => console.log('deletedProduct : ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private addProduct (product : IProduct,options: RequestOptions){
        return this._http.post(this._productUrl,product,options)
            .map(this.extractResponseData)
            .do(data => console.log('createProduct : ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
   private  updateProduct(product: IProduct, options: RequestOptions){

        return this._http.put(this._productUrl,options)
            .map(()=> product)
            .do(data => console.log('Update Product:'+ JSON.stringify(data)))
            .catch(this.handleError);
    }
   private extractResponseData(response: Response){
        let body = response.json();
        return body.data || {};
    }
}

