import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()    
export class ProductDetailGuard implements CanActivate{

    constructor(private _router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        // let declares a local variable, + converts string to int, url[1] gets what there is
        // in position 1 of the query request example  product/10 it will take 10
        let id = +route.url[1].path;

        // if id is not int or id is less than 1 then invalid
        if(isNaN(id) || id <1){
            alert('Invalid product id');
            // start a new navigation to redirect to list page
            this._router.navigate(['/products'])
            // abort current navigation
            return false;
        }
        return true;
    }
}