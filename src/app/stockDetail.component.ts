import { Component, Input } from '@angular/core';
import {CompaniesInfo} from './CompaniesInfo';
@Component({
  selector: 'stock-detail',
  template: `
  <div *ngIf = "detailRequested">
<b>Name</b> : <h3>{{detailRequested.name}}</h3>
  <b>TotalSharesInTheCompany</b> : <h3>{{detailRequested.TotalSharesInTheCompany}}</h3>
 <b>ShareValue</b> : <h3>{{detailRequested.shareValue}}</h3>
  <b>SharesInDemand</b> : <h3>{{detailRequested.sharesInDemand}}</h3>
  <b>SharesReadyForSupply</b> : <h3>{{detailRequested.sharesReadyForSupply}}</h3>
 </div>
  `
})

export class StockDetail{
@Input()  detailRequested: CompaniesInfo;
}