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
var product_service_1 = require("./product.service");
var router_1 = require("@angular/router");
var ProductListComponent = (function () {
    function ProductListComponent(_productService, router) {
        this._productService = _productService;
        this.router = router;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; }, function () { return console.log(_this.products); });
        // console.log(this.products);
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List: ' + message;
    };
    ProductListComponent.prototype.OndeleteProduct = function (id) {
        this.deleteProduct(id);
    };
    ProductListComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        if (id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        }
        else {
            if (confirm("Really delete the product ?")) {
                this._productService.deleteProduct(id)
                    .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    ProductListComponent.prototype.onSaveComplete = function () {
        // Reset the form to clear the flags
        this.router.navigate(['/products']);
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/products/product-list.component.html', styleUrls: ['app/products/product-list.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, router_1.Router])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map