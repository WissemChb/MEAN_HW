import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar'>
            <div class='container-fluid'>
               <a class='navbar-brand' id="menu">{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']" id="menu">Home</a></li>
                    <li><a [routerLink]="['/products']" id="menu">Product List</a></li>
                    <li><a [routerLink]="['/productEdit/0']" id="menu">Add Product</a></li>
                </ul>
                 <ul class="nav navbar-nav navbar-right">
                  <li><a [routerLink]="['/signup']" id="menu"><span class="glyphicon glyphicon-user" ></span> Sign Up</a></li>
                  <li><a [routerLink]="['/login']" id="menu"><span class="glyphicon glyphicon-log-in" ></span> Login</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    styleUrls :['app/app.component.css']
})
export class AppComponent {
    pageTitle: string = 'Product Management';
}
