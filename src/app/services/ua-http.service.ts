import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 

 
@Injectable()
export class RESTService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getShopNowData() {
        return this.http.get('http://localhost:3000/shopNow');
    }

    getProductCardsData() {
        return this.http.get('http://localhost:3000/productCards');
    }

    getProductButton() {
        return this.http.get('http://localhost:3000/productButton');
    }
}