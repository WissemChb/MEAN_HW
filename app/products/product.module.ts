import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductAddGuard} from "./productAddGuard.service";
import {ProductEditComponent} from "./product-edit.component";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id',
        canActivate: [ ProductDetailGuard],
        component: ProductDetailComponent
      },
        {path: 'productEdit/:id',canDeactivate:[ProductAddGuard],component : ProductEditComponent},
    ]),
      ReactiveFormsModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
      ProductEditComponent
  ],
  providers: [
    ProductService,
    ProductDetailGuard,
      ProductAddGuard
  ]
})
export class ProductModule {}
