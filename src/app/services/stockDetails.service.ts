import { Injectable } from '@angular/core';
import { Company } from '../data/company';
import { DATA } from '../data/companiesDataArray';
import { Http, Response } from '@angular/http';
@Injectable()
export class StockDetailsService {
    index: number = -1;
    constructor(private _http: Http){}
  getCompanyInformation(name: string): Company {
      for (var i=0; i<DATA.length; i++){
          if(DATA[i].name == name){
              this.index = i;
          }
     }
     if(this.index != -1)
     return DATA[this.index];
     else
    return {name: 'NOT FOUND',
TotalSharesInTheCompany: 0,
shareValue: 0,
sharesInDemand: 0,
sharesReadyForSupply: 0};
  }

  getCompanyIndex(name: string): number {
      this.index = -1;
      for (var i=0; i<DATA.length; i++){
          if(DATA[i].name == name){
              this.index = i;
          }
     } 
     return this.index;
  }

  
}
