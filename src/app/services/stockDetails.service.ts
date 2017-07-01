import { Injectable } from '@angular/core';
import { Company } from '../data/company';
import { DATA } from '../data/companiesDataArray';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class StockDetailsService {
    constructor(private _http: Http){}
  getCompanyInformation(name: string){
        return this._http.get('http://date.jsontest.com')
        .map((response: Response) => response.json());
    
  }


  
}
