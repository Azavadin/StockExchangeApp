import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CompareStocksService {
    constructor(private _http: Http){}
  getCompanyInformation(name: string){
        return this._http.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+name+'&apikey=PFBYZL048RBDYE6G')
        .map((response: Response) => response.json());
    
  }


  
}
