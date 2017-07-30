import { Injectable } from '@angular/core'
import { IProduct } from './product';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

// this is a local url to my local json we just need to change here the url to a real one when needed
private _productUrl = 'api/products/products.json';

constructor(private _http: Http){

}

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
                            .map((response: Response) => <IProduct[]>response.json())
                            .do(data => console.log ('All: ' + JSON.stringify(data)))
                            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}