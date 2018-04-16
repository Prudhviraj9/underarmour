import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 

 
@Injectable()
export class RESTService {

    constructor(private http:HttpClient) {}

    getShopNowData(countryName) {
        if(countryName === "French") {
            return this.http.get('http://ec2-18-217-68-79.us-east-2.compute.amazonaws.com:4503/bin/underarmour/search?searchTerm=portais,autre&locale=fr');
        }
        return this.http.get('http://ec2-18-217-68-79.us-east-2.compute.amazonaws.com:4503/bin/underarmour/search?searchTerm=downtime,outfitting,hooked');
    }

    getProductCardsData(countryName) {
        if(countryName === "French") {
            return this.http.get('http://ec2-18-217-68-79.us-east-2.compute.amazonaws.com:4503/bin/underarmour/search?searchTerm=perpetual,chaussures,blouson&locale=fr');
        }
        return this.http.get('http://ec2-18-217-68-79.us-east-2.compute.amazonaws.com:4503/bin/underarmour/search?searchTerm=Hoodies,gear,customized');
    }

    getMegaMenu(countryName) {
        if(countryName === "French") {
            return this.http.get('http://ec2-18-217-68-79.us-east-2.compute.amazonaws.com:4503/bin/underarmour/nav&locale=fr');
        }
        return this.http.get('http://ec2-18-217-68-79.us-east-2.compute.amazonaws.com:4503/bin/underarmour/nav');
    }

    getHeaderBanner(countryName) {
        if(countryName === "French") {
            return this.http.get('http://ec2-18-217-68-79.us-east-2.compute.amazonaws.com:4503/bin/underarmour/search?searchTerm=lifts&locale=fr');
        }
        return this.http.get('http://ec2-18-217-68-79.us-east-2.compute.amazonaws.com:4503/bin/underarmour/search?searchTerm=lifts');
    }
}