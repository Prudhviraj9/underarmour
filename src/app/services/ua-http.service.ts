import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 

 
@Injectable()
export class RESTService {

    constructor(private http:HttpClient) {}

    getShopNowData(countryName) {
        if(countryName) {
            return this.http.get('http://localhost:3000/shopNow?countryName='+countryName);
        }
        return this.http.get('http://ec2-18-217-68-79.us-east-2.compute.amazonaws.com:4503/bin/underarmour/search?searchTerm=downtime,outfitting,hooked');
    }

    getProductCardsData(countryName) {
        if(countryName) {
            return this.http.get('http://localhost:3000/productCards?countryName='+countryName);
        }
        return this.http.get('http://localhost:3000/productCards');
    }

    getProductButton(countryName) {
        if(countryName) {
            return this.http.get('http://localhost:3000/productButton?countryName='+countryName);
        }
        return this.http.get('http://localhost:3000/productButton');
    }

    getMegaMenu(countryName) {
        if(countryName) {
            return this.http.get('http://localhost:3000/megaMenu?countryName='+countryName);
        }
        return this.http.get('http://localhost:3000/megaMenu');
    }

    getHeaderBanner(countryName) {
        if(countryName) {
            return this.http.get('http://localhost:3000/headerBanner?countryName='+countryName);
        }
        return this.http.get('http://localhost:3000/headerBanner');
    }
}