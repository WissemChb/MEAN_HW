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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
        this._productUrl = 'http://localhost:5000/api/products';
    }
    ProductService.prototype.getProducts = function () {
        return this._http.get(this._productUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.getProduct = function (id) {
        return this.getProducts()
            .map(function (products) { return products.find(function (p) { return p.id === id; }); });
    };
    ProductService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ProductService.prototype.saveProduct = function (product) {
        var headers = new http_1.Headers({ 'content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        product.id = undefined;
        if (product.id === 0) {
            return this.addProduct(product, options);
        }
        return this.updateProduct(product, options);
    };
    ;
    ProductService.prototype.deleteProduct = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this._productUrl + "/" + id;
        return this._http.delete(url, options)
            .do(function (data) { return console.log('deletedProduct : ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductService.prototype.addProduct = function (product, options) {
        return this._http.post(this._productUrl, product, options)
            .map(this.extractResponseData)
            .do(function (data) { return console.log('createProduct : ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductService.prototype.updateProduct = function (product, options) {
        return this._http.put(this._productUrl, options)
            .map(function () { return product; })
            .do(function (data) { return console.log('Update Product:' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductService.prototype.extractResponseData = function (response) {
        var body = response.json();
        return body.data || {};
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map