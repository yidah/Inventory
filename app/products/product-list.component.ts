import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import { ProductService } from './product.service';

@Component({
    // we used selector to add this component in app.component.ts template instead of menu
    // <div><h1>{{pageTitle}}</h1>
    //     <pm-products></pm-products>
    // </div>
    // but the application uses routers instead
    // selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    products: IProduct[];

    constructor(private _productService: ProductService){

    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
        .subscribe(products => this.products = products,
                    error => this.errorMessage = <any>error);
    }

    onRatingClicked(message:string):void{
        this.pageTitle = 'Product List: ' + message;
    }

}